import React, { useEffect, useReducer } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/navigation";
import useBudgetContext from "../components/context";

const Dropdown = dynamic(() => import("../components/dropdown"));
const DropdownField = dynamic(() => import("../components/dropdown-field"));

const CategorySection = ({ title, category }) => {
  return (
    <Dropdown title={title}>
      {category.map((item) => (
        <DropdownField item={item} key={item.title} />
      ))}
    </Dropdown>
  );
};

const Home: NextPage = () => {

  const {state, dispatch} = useBudgetContext();

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

        <button onClick={() => {
          return dispatch({
            type: 'ADD_CATEGORY',
            payload: 'New Category'
          })
        }}>Add Category</button>
      </div>
    </>
  );
};

export default Home;
