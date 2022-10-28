<div role="main">

  <div class="mainHeadingAndSearch px-3 px-md-4 px-lg-5 py-5">

    <h5 class="homePageMainH5">The Grassroots Economics Blockchain Explorer</h5>

    <form action="search" method="POST">
      <div class="searchInputGroup input-group input-group-lg">
        <button
          class="searchFilterButton d-none d-sm-block btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">filters</button
        >
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
        <button class="btn btn-primary" type="button" id="button-addon2"
          ><iconify-icon
            class="searchIcon"
            inline
            height="1.5em"
            icon="material-symbols:search"
          /></button
        >
      </div>
    </form>
  </div>
</div>

<style>
.mainHeadingAndSearch {
  height: 256px;
 
  background-image: url("/graphics/backgroundImages/hexagon.svg");
}

.homePageMainH5 {
  color: white;
}
  .searchInputGroup {
    max-width: 610px;
}

.searchIcon {
  margin: -0.4em;
}

  .homePageStatistics {
    margin-top: -48px;
    /* border-radius:16px; */
    /* background-color: white; */
    /* height: 200px; */
  }
</style>