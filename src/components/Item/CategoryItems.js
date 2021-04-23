import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "react-router-dom";
import { Badge, Container, Row, Col, Alert } from "react-bootstrap";
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

  const [isSubCategoryLoading, setSubCategoryLoading] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [category, setCategory] = useState();

  /** filter hooks */
  const [activeSubCategoryId, setActiveSubCategoryId] = useState("");
  const [activeSubCategoryName, setActiveSubCategoryName] = useState("");

  const [filter, setFilter] = useState(
    localStorage.getItem("categoryFilter") !== null
      ? JSON.parse(localStorage.getItem("categoryFilter"))
      : {
          activeCityFilter: "",
          activeRegionFilter: "",
          conditionFilter: "",
          minPriceFilter: "",
          maxPriceFilter: "",
        }
  );

  const [activeCityFilter, setActiveCityFilter] = useState("");
  const [activeRegionFilter, setActiveRegionFilter] = useState("");

  const [conditionFilter, setConditionFilter] = useState("");

  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");
  /** /filter hooks */

  function handlePageChange(pageNumber, dataToPaginate) {
    if (!dataToPaginate) dataToPaginate = itemsToPaginate;

    setActivePage(pageNumber);
    const pStart = (pageNumber - 1) * 6;
    setPaginatedItems(dataToPaginate.slice(pStart, pStart + 6));
  }

  function handleCategoryChange(id) {
    setActiveSubCategoryId("");
    setActiveSubCategoryName("");
    setActiveCityFilter("");
    setActiveRegionFilter("");
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

  /** filter functions */

  function handleSubCategoryFilter(id, name) {
    setActiveSubCategoryId(id);
    setActiveSubCategoryName(name);

    let _items = items;

    if (id === activeSubCategoryId) {
      setActiveSubCategoryId("");
      setActiveSubCategoryName("");
    } else if (name.length > 0)
      _items = _items.filter((x) => x.item.subCategoryId === id);

    if (activeCityFilter.length > 0)
      _items = _items.filter((x) => x.user.city === activeCityFilter);

    if (activeRegionFilter.length > 0)
      _items = _items.filter((x) => x.user.region === activeRegionFilter);

    if (conditionFilter !== "")
      _items = _items.filter(
        (x) => x.item.condition.id === parseInt(conditionFilter)
      );

    if (
      (minPriceFilter !== "" &&
        maxPriceFilter !== "" &&
        parseFloat(minPriceFilter) <= maxPriceFilter) ||
      (minPriceFilter !== "" && maxPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price >= parseFloat(minPriceFilter)
      );
    if (
      (maxPriceFilter !== "" &&
        minPriceFilter !== "" &&
        parseFloat(maxPriceFilter) >= minPriceFilter) ||
      (maxPriceFilter !== "" && minPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price <= parseFloat(maxPriceFilter)
      );

    setItemCount(_items.length);
    handlePageChange(1, _items);
    setItemsToPaginate(_items);
  }

  function onCityChange(event) {
    let _items = items;

    if (activeSubCategoryName.length > 0)
      _items = _items.filter(
        (x) => x.item.subCategoryId === activeSubCategoryId
      );

    if (event.target.value.length > 0)
      _items = _items.filter((x) => x.user.city === event.target.value);
    else setActiveRegionFilter("");

    if (activeRegionFilter.length > 0)
      _items = _items.filter((x) => x.user.region === activeRegionFilter);

    if (conditionFilter !== "")
      _items = _items.filter(
        (x) => x.item.condition.id === parseInt(conditionFilter)
      );

    if (
      (minPriceFilter !== "" &&
        maxPriceFilter !== "" &&
        parseFloat(minPriceFilter) <= maxPriceFilter) ||
      (minPriceFilter !== "" && maxPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price >= parseFloat(minPriceFilter)
      );
    if (
      (maxPriceFilter !== "" &&
        minPriceFilter !== "" &&
        parseFloat(maxPriceFilter) >= minPriceFilter) ||
      (maxPriceFilter !== "" && minPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price <= parseFloat(maxPriceFilter)
      );

    setActiveCityFilter(event.target.value);
    setItemCount(_items.length);
    handlePageChange(1, _items);
    setItemsToPaginate(_items);
  }

  function onRegionChange(event) {
    let _items = items;

    if (activeSubCategoryName.length > 0)
      _items = _items.filter(
        (x) => x.item.subCategoryId === activeSubCategoryId
      );

    if (activeCityFilter.length > 0)
      _items = _items.filter((x) => x.user.city === activeCityFilter);

    if (event.target.value.length > 0)
      _items = _items.filter((x) => x.user.region === event.target.value);

    if (conditionFilter !== "")
      _items = _items.filter(
        (x) => x.item.condition.id === parseInt(conditionFilter)
      );

    if (
      (minPriceFilter !== "" &&
        maxPriceFilter !== "" &&
        parseFloat(minPriceFilter) <= maxPriceFilter) ||
      (minPriceFilter !== "" && maxPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price >= parseFloat(minPriceFilter)
      );
    if (
      (maxPriceFilter !== "" &&
        minPriceFilter !== "" &&
        parseFloat(maxPriceFilter) >= minPriceFilter) ||
      (maxPriceFilter !== "" && minPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price <= parseFloat(maxPriceFilter)
      );

    setActiveRegionFilter(event.target.value);
    setItemCount(_items.length);
    handlePageChange(1, _items);
    setItemsToPaginate(_items);
  }

  function onConditionFilterChange(event) {
    let _items = items;

    if (activeSubCategoryName.length > 0)
      _items = _items.filter(
        (x) => x.item.subCategoryId === activeSubCategoryId
      );

    if (activeCityFilter.length > 0)
      _items = _items.filter((x) => x.user.city === activeCityFilter);

    if (activeRegionFilter.length > 0)
      _items = _items.filter((x) => x.user.region === activeRegionFilter);

    if (event.target.value !== "")
      _items = _items.filter(
        (x) => x.item.condition.id === parseInt(event.target.value)
      );

    if (
      (minPriceFilter !== "" &&
        maxPriceFilter !== "" &&
        parseFloat(minPriceFilter) <= maxPriceFilter) ||
      (minPriceFilter !== "" && maxPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price >= parseFloat(minPriceFilter)
      );
    if (
      (maxPriceFilter !== "" &&
        minPriceFilter !== "" &&
        parseFloat(maxPriceFilter) >= minPriceFilter) ||
      (maxPriceFilter !== "" && minPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price <= parseFloat(maxPriceFilter)
      );

    setConditionFilter(event.target.value);
    setItemCount(_items.length);
    handlePageChange(1, _items);
    setItemsToPaginate(_items);
  }

  function onMinPriceFilterChange(event) {
    let _items = items;

    if (activeSubCategoryName.length > 0)
      _items = _items.filter(
        (x) => x.item.subCategoryId === activeSubCategoryId
      );

    if (activeCityFilter.length > 0)
      _items = _items.filter((x) => x.user.city === activeCityFilter);

    if (activeRegionFilter.length > 0)
      _items = _items.filter((x) => x.user.region === activeRegionFilter);

    if (conditionFilter !== "")
      _items = _items.filter(
        (x) => x.item.condition.id === parseInt(conditionFilter)
      );

    if (
      (event.target.value !== "" &&
        maxPriceFilter !== "" &&
        parseFloat(event.target.value) <= maxPriceFilter) ||
      (event.target.value !== "" && maxPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null &&
          x.item.price >= parseFloat(event.target.value)
      );
    if (maxPriceFilter !== "")
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price <= parseFloat(maxPriceFilter)
      );

    setMinPriceFilter(event.target.value);
    setItemCount(_items.length);
    handlePageChange(1, _items);
    setItemsToPaginate(_items);
  }

  function onMaxPriceFilterChange(event) {
    let _items = items;

    if (activeSubCategoryName.length > 0)
      _items = _items.filter(
        (x) => x.item.subCategoryId === activeSubCategoryId
      );

    if (activeCityFilter.length > 0)
      _items = _items.filter((x) => x.user.city === activeCityFilter);

    if (activeRegionFilter.length > 0)
      _items = _items.filter((x) => x.user.region === activeRegionFilter);

    if (conditionFilter !== "")
      _items = _items.filter(
        (x) => x.item.condition.id === parseInt(conditionFilter)
      );

    if (minPriceFilter !== "")
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price >= parseFloat(minPriceFilter)
      );

    if (
      (event.target.value !== "" &&
        minPriceFilter !== "" &&
        parseFloat(event.target.value) >= minPriceFilter) ||
      (event.target.value !== "" && minPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null &&
          x.item.price <= parseFloat(event.target.value)
      );

    setMaxPriceFilter(event.target.value);
    setItemCount(_items.length);
    handlePageChange(1, _items);
    setItemsToPaginate(_items);
  }

  /** /filter functions */

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
    let _items = items;
    if (event.target.value === "newest")
      _items = _items.sort((a, b) =>
        a.item.addedTime < b.item.addedTime ? 1 : -1
      );
    if (event.target.value === "hPrice")
      _items = _items.sort((a, b) => (a.item.price < b.item.price ? 1 : -1));
    if (event.target.value === "lPrice")
      _items = _items.sort((a, b) => (a.item.price > b.item.price ? 1 : -1));

    if (activeSubCategoryName.length > 0)
      _items = _items.filter(
        (x) => x.item.subCategoryId === activeSubCategoryId
      );

    if (activeCityFilter.length > 0)
      _items = _items.filter((x) => x.user.city === activeCityFilter);

    if (activeRegionFilter.length > 0)
      _items = _items.filter((x) => x.user.region === activeRegionFilter);

    if (conditionFilter !== "")
      _items = _items.filter(
        (x) => x.item.condition.id === parseInt(conditionFilter)
      );

    if (
      (minPriceFilter !== "" &&
        maxPriceFilter !== "" &&
        parseFloat(minPriceFilter) <= maxPriceFilter) ||
      (minPriceFilter !== "" && maxPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price >= parseFloat(minPriceFilter)
      );

    if (
      (maxPriceFilter !== "" &&
        minPriceFilter !== "" &&
        parseFloat(maxPriceFilter) >= minPriceFilter) ||
      (maxPriceFilter !== "" && minPriceFilter === "")
    )
      _items = _items.filter(
        (x) =>
          x.item.price !== null && x.item.price <= parseFloat(maxPriceFilter)
      );

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
                onCityChange={onCityChange}
                onRegionChange={onRegionChange}
                cityValue={activeCityFilter}
                regionValue={activeRegionFilter}
                conditionFilter={conditionFilter}
                onConditionFilterChange={onConditionFilterChange}
                minPriceFilter={minPriceFilter}
                onMinPriceFilterChange={onMinPriceFilterChange}
                maxPriceFilter={maxPriceFilter}
                onMaxPriceFilterChange={onMaxPriceFilterChange}
              />
            )}
          </Col>
          <Col md={9}>
            {category !== null && contentLoaded && (
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
                      {activeMenu && (
                        <LeftSideFilter
                          subCategories={category.subCategories}
                          subCategoriesOnChange={handleSubCategoryFilter}
                          activeSubCategoryId={activeSubCategoryId}
                          onCityChange={onCityChange}
                          onRegionChange={onRegionChange}
                          cityValue={activeCityFilter}
                          regionValue={activeRegionFilter}
                          conditionFilter={conditionFilter}
                          onConditionFilterChange={onConditionFilterChange}
                          minPriceFilter={minPriceFilter}
                          onMinPriceFilterChange={onMinPriceFilterChange}
                          maxPriceFilter={maxPriceFilter}
                          onMaxPriceFilterChange={onMaxPriceFilterChange}
                        />
                      )}
                    </div>
                  </Col>
                  <Col>
                    <SortDropdown itemCount={itemCount} onChange={sortItems} />
                  </Col>
                </Row>
                {paginatedItems.length > 0 ? (
                  <>
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
                              {format(
                                new Date(x.item.addedTime),
                                "dd MMMM yyyy",
                                {
                                  locale: fr,
                                }
                              )}{" "}
                              {/* 
                          | <FontAwesomeIcon icon={faComment} />{" "}
                          {x.item.itemFeedbacks.length}
                          */}
                            </span>
                            <span className="price-info blue">
                              {x.item.price && x.item.price !== 0 && (
                                <>
                                  {" "}
                                  <FontAwesomeIcon icon={faCoins} />{" "}
                                  {x.item.price} TND &nbsp;&nbsp; &nbsp;
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
                ) : (
                  <>
                    <Row>
                      <Col>
                        <Alert variant="info">Aucun article trouvé.</Alert>
                      </Col>
                    </Row>
                  </>
                )}
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
