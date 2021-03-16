import React from "react";
import Left_sidebar from "./left_sidebar/Left_sidebar";
import Right_product from "./right_product/Right_product";

function main() {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <Left_sidebar />
          </div>
          <Right_product />
        </div>
      </div>
    </section>
  );
}
export default main;
