import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductNav.css";

const ProductNav = (props) => {
  return (
    <div className="productNav">
      <div className="ProductNavBar">
        <div className="navCol">
          {/*     ------------------------------- Electronics------------------ */}
          <div className="Prod_Drop_Tag">
            <button type="button" value="Electronics">
              Electronics
            </button>
            <div className="Prod_Dis_Tag">
              <div className="productDropbox">
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Electronics 1</NavLink>
                  <NavLink to="/users">Electronics 2</NavLink>
                  <NavLink to="/users">Electronics 3</NavLink>
                  <NavLink to="/users">Electronics 4</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Electronics 5</NavLink>
                  <NavLink to="/users">Electronics 6</NavLink>
                  <NavLink to="/users">Electronics 7</NavLink>
                  <NavLink to="/users">Electronics 8</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Electronics 9</NavLink>
                  <NavLink to="/users">Electronics 10</NavLink>
                  <NavLink to="/users">Electronics 11</NavLink>
                  <NavLink to="/users">Electronics 12</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Electronics 13</NavLink>
                  <NavLink to="/users">Electronics 14</NavLink>
                  <NavLink to="/users">Electronics 15</NavLink>
                  <NavLink to="/users">Electronics 16</NavLink>
                </div>
              </div>
            </div>
          </div>
          {/*     ------------------------------- Clothing------------------------------- */}
          <div className="Prod_Drop_Tag">
            <button type="button" value="Clothing">
              Clothing
            </button>
            <div className="Prod_Dis_Tag">
              <div className="productDropbox">
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Clothing 1</NavLink>
                  <NavLink to="/users">Clothing 2</NavLink>
                  <NavLink to="/users">Clothing 3</NavLink>
                  <NavLink to="/users">Clothing 4</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Clothing 5</NavLink>
                  <NavLink to="/users">Clothing 6</NavLink>
                  <NavLink to="/users">Clothing 7</NavLink>
                  <NavLink to="/users">Clothing 8</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Clothing 9</NavLink>
                  <NavLink to="/users">Clothing 10</NavLink>
                  <NavLink to="/users">Clothing 11</NavLink>
                  <NavLink to="/users">Clothing 12</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Clothing 13</NavLink>
                  <NavLink to="/users">Clothing 14</NavLink>
                  <NavLink to="/users">Clothing 15</NavLink>
                  <NavLink to="/users">Clothing 16</NavLink>
                </div>
              </div>
            </div>
          </div>
          {/*     ------------------------------- Education------------------------------- */}
          <div className="Prod_Drop_Tag">
            <button type="button" value="Education">
              Education
            </button>
            <div className="Prod_Dis_Tag">
              <div className="productDropbox">
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Education 1</NavLink>
                  <NavLink to="/users">Education 2</NavLink>
                  <NavLink to="/users">Education 3</NavLink>
                  <NavLink to="/users">Education 4</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Education 5</NavLink>
                  <NavLink to="/users">Education 6</NavLink>
                  <NavLink to="/users">Education 7</NavLink>
                  <NavLink to="/users">Education 8</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Education 9</NavLink>
                  <NavLink to="/users">Education 10</NavLink>
                  <NavLink to="/users">Education 11</NavLink>
                  <NavLink to="/users">Education 12</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Education 13</NavLink>
                  <NavLink to="/users">Education 14</NavLink>
                  <NavLink to="/users">Education 15</NavLink>
                  <NavLink to="/users">Education 16</NavLink>
                </div>
              </div>
            </div>
          </div>
          {/*     ------------------------------- Medicine------------------------------- */}
          <div className="Prod_Drop_Tag">
            <button type="button" value="Medicine">
              Medicine
            </button>
            <div className="Prod_Dis_Tag">
              <div className="productDropbox">
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Medicine 1</NavLink>
                  <NavLink to="/users">Medicine 2</NavLink>
                  <NavLink to="/users">Medicine 3</NavLink>
                  <NavLink to="/users">Medicine 4</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Medicine 5</NavLink>
                  <NavLink to="/users">Medicine 6</NavLink>
                  <NavLink to="/users">Medicine 7</NavLink>
                  <NavLink to="/users">Medicine 8</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Medicine 9</NavLink>
                  <NavLink to="/users">Medicine 10</NavLink>
                  <NavLink to="/users">Medicine 11</NavLink>
                  <NavLink to="/users">Medicine 12</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Medicine 13</NavLink>
                  <NavLink to="/users">Medicine 14</NavLink>
                  <NavLink to="/users">Medicine 15</NavLink>
                  <NavLink to="/users">Medicine 16</NavLink>
                </div>
              </div>
            </div>
          </div>
          {/*     ------------------------------- Cosmatics------------------------------- */}
          <div className="Prod_Drop_Tag">
            <button type="button" value="Hardware">
              Cosmatics
            </button>
            <div className="Prod_Dis_Tag">
              <div className="productDropbox">
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Cosmatics 1</NavLink>
                  <NavLink to="/users">Cosmatics 2</NavLink>
                  <NavLink to="/users">Cosmatics 3</NavLink>
                  <NavLink to="/users">Cosmatics 4</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Cosmatics 5</NavLink>
                  <NavLink to="/users">Cosmatics 6</NavLink>
                  <NavLink to="/users">Cosmatics 7</NavLink>
                  <NavLink to="/users">Cosmatics 8</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Cosmatics 9</NavLink>
                  <NavLink to="/users">Cosmatics 10</NavLink>
                  <NavLink to="/users">Cosmatics 11</NavLink>
                  <NavLink to="/users">Cosmatics 12</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Cosmatics 13</NavLink>
                  <NavLink to="/users">Cosmatics 14</NavLink>
                  <NavLink to="/users">Cosmatics 15</NavLink>
                  <NavLink to="/users">Cosmatics 16</NavLink>
                </div>
              </div>
            </div>
          </div>
          {/*     ------------------------------- Solids------------------------------- */}
          <div className="Prod_Drop_Tag">
            <button type="button" value="Cosmatics">
              Solids
            </button>
            <div className="Prod_Dis_Tag">
              <div className="productDropbox">
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Solids 1</NavLink>
                  <NavLink to="/users">Solids 2</NavLink>
                  <NavLink to="/users">Solids 3</NavLink>
                  <NavLink to="/users">Solids 4</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Solids 5</NavLink>
                  <NavLink to="/users">Solids 6</NavLink>
                  <NavLink to="/users">Solids 7</NavLink>
                  <NavLink to="/users">Solids 8</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Solids 9</NavLink>
                  <NavLink to="/users">Solids 10</NavLink>
                  <NavLink to="/users">Solids 11</NavLink>
                  <NavLink to="/users">Solids 12</NavLink>
                </div>
                <div className="Prod_DBox_Col">
                  <NavLink to="/users">Solids 13</NavLink>
                  <NavLink to="/users">Solids 14</NavLink>
                  <NavLink to="/users">Solids 15</NavLink>
                  <NavLink to="/users">Solids 16</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
