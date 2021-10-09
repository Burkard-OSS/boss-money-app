import React, { useMemo, useReducer } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/navigation";

const Dropdown = dynamic(() => import("../components/dropdown"));
const DropdownField = dynamic(() => import("../components/dropdown-field"));

enum actionTypes {
  ADD_CATEGORY = "ADD_CATEGORY",
  ADD_ITEM = "ADD_ITEM",
  EDIT_CATEGORY = "EDIT_CATEGORY",
  EDIT_ITEM = "EDIT_ITEM",
  REMOVE_CATEGORY = "REMOVE_CATEGORY",
  REMOVE_ITEM = "REMOVE_ITEM",
}

const data = {
  Income: [
    {
      title: "Job",
      price: 8000,
    },
  ],
};

const reducer = (data, action) => {
  let actionType: actionTypes = action.type;

  switch (actionType) {
    case "ADD_CATEGORY":
      if (data[action.payload.title] || !action.payload.title) {
        console.warn(`Category ${action.payload.title} already exists.`);
        return data;
      }
      data[action.payload.title] = [];
      return data;
    default:
      return data;
  }
};

const CategorySection = ({title, category}) => {
  console.log('title', title);
  console.log('category', category)

  return (
    <Dropdown title={title}>
      {category.map((item) => (
        <DropdownField item={item} key={item.title} />
      ))}
    </Dropdown>
  );
};

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <>
      <Head>
        <title>Boss Money</title>
        <meta name="description" content="Open source budgeting app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="m-5">
        <h2 className="py-3 text-lg">Welcome User</h2>

        {Object.entries(state).map(([title, category]) => (
          <CategorySection key={title} title={title} category={category} />
        ))}
        
        <button>Add Category</button>
      </div>
    </>
  );
};

export default Home;
