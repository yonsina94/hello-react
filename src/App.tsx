import React from "react";
import "./App.css";
import { Card } from "./components/card/card";

function App() {
  return (
    <div className="App">
      <main>
        <article>
          <aside className="columns-desktop">
            <div style={{ display: "flex" }}>
              <Card
                imgSrc="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2014/02/BlackBerry-Z3_solo.jpg"
                productName="BlackBerry Z3"
                productCurrency="DOP"
                productPrice={15000}
              />
            </div>
          </aside>
        </article>
      </main>
    </div>
  );
}

export default App;
