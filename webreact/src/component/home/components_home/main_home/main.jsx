import React from "react";
import Main_category from "./main_left/main_category/Main_category";
import Main_brand from "./main_left/main_brand/Main_brand";
import Main_price from "./main_left/main_price/Main_price";
import Main_shipping from "./main_left/main_shipping/Main_shipping";
import Main_feature from "./main_right/main_feature/Main_feature";
import Main_category_tab from "./main_right/main_category_tab/Main_category_tab";
import Main_recomment from "./main_right/main_recomment/Main_recomment";

function main() {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div class="left-sidebar">
              <Main_category />
              <Main_brand />
              <Main_price />
              <Main_shipping />
            </div>
          </div>
          <div class="col-sm-9 padding-right">
            <Main_feature />
            <Main_category_tab />
            <Main_recomment />
          </div>
        </div>
      </div>
    </section>
  );
}
export default main;
