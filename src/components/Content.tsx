import React from "react";
import SectionItem from "./SectionItem";

export default function Content() {
  return (
    <div>
      <SectionItem
        mainImg="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        title="forest"
      />
      <SectionItem
        mainImg="https://images.unsplash.com/photo-1528872042734-8f50f9d3c59b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        title="sky"
      />
      <SectionItem
        mainImg="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        title="desert"
      />
    </div>
  );
}
