import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "react-router-dom";
import { Badge, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faClock,
  faFilter,
  faCoins,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import HeaderCategories from "../_sharedComponents/HeaderCategories";
import LeftSideFilter from "./_sharedComponents/LeftSideFilter";
import Pagination from "react-js-pagination";
import SortDropdown from "../_sharedComponents/SortDropdown";
import * as api from "./api/CategoryApi";
import Error from "../_sharedComponents/Error";

function CategoryItems(props) {
  const [isError, setIsError] = useState(false);

  const [items, setItems] = useState([]);
  const [itemsToPaginate, setItemsToPaginate] = useState([]);
  const [itemCount, setItemCount] = useState();
  const [paginatedItems, setPaginatedItems] = useState([]);

  const [contentLoaded, setContentLoaded] = useState(false);

  const [activePage, setActivePage] = useState(1);

  const [activeSubCategoryId, setActiveSubCategoryId] = useState("");
  const [activeSubCategoryName, setActiveSubCategoryName] = useState("");

  const [isSubCategoryLoading, setSubCategoryLoading] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [category, setCategory] = useState();

  function handlePageChange(pageNumber, dataToPaginate) {
    if (!dataToPaginate) dataToPaginate = itemsToPaginate;

    setActivePage(pageNumber);
    const pStart = (pageNumber - 1) * 6;
    setPaginatedItems(dataToPaginate.slice(pStart, pStart + 6));
  }

  function handleCategoryChange(id) {
    setActiveSubCategoryId("");
    setActiveSubCategoryName("");
    setSubCategoryLoading(false);
    api.getCategory(id).then((res) => {
      setCategory(res.body);
      setSubCategoryLoading(true);
    });
    api
      .getItemsByCategory(id)
      .then((res) => {
        setIsError(false);
        setItems(res.body);
        handlePageChange(1, res.body);
        setItemsToPaginate(res.body);
        setItemCount(res.body.length);
        setContentLoaded(true);
      })
      .catch((error) => {
        setIsError(true);
      });
  }

  function handleSubCategoryFilter(id, name) {
    let _items = items.filter((x) => x.item.subCategoryId === id);
    setItemCount(_items.length);
    handlePageChange(1, _items);
    setItemsToPaginate(_items);
    setActiveSubCategoryId(id);
    setActiveSubCategoryName(name);
  }

  function validateImage(imgPath) {
    try {
      return (
        <div
          className="item-img-container-lg"
          style={{
            backgroundImage:
              "url(" +
              require(process.env.REACT_APP_ITEM_UPLOAD_PATH + imgPath) +
              ")",
          }}
        ></div>
      );
    } catch (err) {
      return (
        <div
          className="item-img-container-lg"
          style={{
            backgroundImage: "url(/images/not-available.jpg)",
          }}
        ></div>
      );
    }
  }

  function sortItems(event) {
    let _items = { ...items };
    if (event.target.value === "newest")
      _items = items.sort((a, b) =>
        a.item.addedTime < b.item.addedTime ? 1 : -1
      );
    if (event.target.value === "hPrice")
      _items = items.sort((a, b) => (a.item.price < b.item.price ? 1 : -1));
    if (event.target.value === "lPrice")
      _items = items.sort((a, b) => (a.item.price > b.item.price ? 1 : -1));

    handlePageChange(1, _items);
    setItemsToPaginate(_items);
  }

  useEffect(() => {
    handleCategoryChange(props.match.params.id);
  }, []);

  return (
    <>
      <HeaderCategories handleCategoryChange={handleCategoryChange} />
      <br />
      <Container>
        <Row>
          <Col className="d-none d-md-block" md={3}>
            {isSubCategoryLoading && (
              <LeftSideFilter
                subCategories={category.subCategories}
                subCategoriesOnChange={handleSubCategoryFilter}
                activeSubCategoryId={activeSubCategoryId}
              />
            )}
          </Col>
          <Col md={9}>
            {contentLoaded && (
              <>
                <Row>
                  <Col xs={12} md={7} xl={8}>
                    <br className="d-none d-sm-block" />
                    <span className="blue">{category.name}</span> {">"}{" "}
                    {activeSubCategoryName === ""
                      ? "Tous"
                      : activeSubCategoryName}
                    <br />
                    <br className="d-none d-md-block" />
                    <div
                      className="d-block d-md-none"
                      onClick={() => setActiveMenu(!activeMenu)}
                    >
                      <br />
                      <p className="pointer category-filter-bar">
                        <FontAwesomeIcon icon={faFilter} /> &nbsp; Filtrer
                      </p>
                      {activeMenu && <LeftSideFilter />}
                    </div>
                  </Col>
                  <Col>
                    <SortDropdown itemCount={itemCount} onChange={sortItems} />
                  </Col>
                </Row>
                <Row>
                  {paginatedItems.map((x, i) => (
                    <Col xs={12} sm={6} lg={4} key={i}>
                      <Link to={"/item/" + x.item.id}>
                        {validateImage(x.item.images.split(";")[0])}
                        <span className="item-name">{x.item.title}</span>
                        <Badge
                          className={"bg-" + x.item.subCategory.category.id}
                        >
                          {x.item.subCategory.category.name}
                        </Badge>{" "}
                        <span className="small">
                          Par {x.user.firstName} |{" "}
                          <FontAwesomeIcon icon={faClock} />{" "}
                          {format(new Date(x.item.addedTime), "dd MMMM yyyy", {
                            locale: fr,
                          })}{" "}
                          | <FontAwesomeIcon icon={faComment} />{" "}
                          {x.item.itemFeedbacks.length}
                        </span>
                        <span className="price-info blue">
                          {x.item.price && x.item.price !== 0 && (
                            <>
                              {" "}
                              <FontAwesomeIcon icon={faCoins} /> {x.item.price}{" "}
                              TND &nbsp;&nbsp; &nbsp;
                            </>
                          )}
                          {x.item.exchange && (
                            <>
                              <FontAwesomeIcon icon={faExchangeAlt} />
                              &nbsp; Echange
                            </>
                          )}
                        </span>
                        <p className="item-description d-none d-lg-block">
                          {x.item.description.substr(0, 100)} [...]
                        </p>
                        <br className="d-block d-lg-none" />
                        <br className="d-block d-lg-none" />
                      </Link>
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Col>
                    <Pagination
                      activePage={activePage}
                      itemsCountPerPage={6}
                      totalItemsCount={itemCount}
                      pageRangeDisplayed={5}
                      onChange={handlePageChange.bind(this)}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </Col>
                </Row>
              </>
            )}

            {isError && <Error />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CategoryItems;
