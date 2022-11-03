<script context="module">

import SummaryStatisticsCard from '../lib/Components/StatisticsComponents/SummaryStatisticsCard.svelte';

</script>

<script>

let dataContent = 
  { "usersSection":
    { "summaryStatistics":
      [ { "title": "Registered Users",
          "iconString": "fa-solid:users",
          "rows":
          [ { "value": "50.5k",
              "valuePostfix": "(total)",
              "valueRelativePercentage": "9",
            },
            { "value": "4.00k",
              "valuePostfix": "(new)",
              "valueRelativePercentage": "6",
            },
          ]
        },
        { "title": "Traders",
          "rows":
          [ { "value": "4.42k",
              "valuePostfix": "(total)",
              "valueRelativePercentage": "-92",
            },
            { "value": "670",
              "valuePostfix": "(frequent)",
              "valueRelativePercentage": "-98",
            },
          ]
        },
        { "title": "Supply & Reserve",
          "rows":
          [ { "value": "16.0M",
              "valuePostfix": "(supply in circulation)",
              "valueRelativePercentage": undefined,
            },
            { "value": "1.98M",
              "valuePostfix": "(reserve)",
              "valueRelativePercentage": undefined,
            },
          ]
        },
        { "title": "Exchange & Price",
          "rows":
          [ { "value": "1.0",
              "valuePostfix": "(KES)",
              "valueRelativePercentage": undefined,
            },
          ]
        }
      ]
    }
  }
</script>

<div class="pageMainContent" role="main">

  <div class="mainHeadingAndSearch mainPadding">

    <h5 class="homePageMainH5">The Grassroots Economics Public Dashboard</h5>

    removed the search bar
    <form action="search" method="POST">
      <div class="searchInputGroup input-group input-group-lg">
        <button class="searchFilterButton btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">filters</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
        <button class="btn btn-primary" type="button" id="button-addon2"><iconify-icon class="searchIcon" inline height="1.5em" icon="material-symbols:search"></iconify-icon></button>
      </div>
    </form>
  </div>

  <div class="mainStatistics mainPadding">

    <div class="allCharts_container">
      <div class="row g-0">

    
        <div role="section" class="usersCharts_container chartsSection col" aria-labelledby="userChartSectionHeader" >
          <div class="chartsSectionHeader">
            <h5 id="userChartSectionHeader" aria-label="Users"><iconify-icon inline icon="fa-solid:users" aria-hidden="true" ></iconify-icon> Users</h5>
          </div>
          <div class="usersCharts_summaryStatistics_container row">
            {#each dataContent.usersSection.summaryStatistics as statisticsData}
              <!-- <div class="col"> -->
                <SummaryStatisticsCard {statisticsData} />
              <!-- </div> -->
            {/each}
          </div>
  </div>
  
  
      </div>
    </div>

  </div>

</div>

<style>

.mainPadding {
  padding-left : min(5%, 32px);
  padding-right : min(5%, 32px);
}
.mainMargin {
  margin: min(10%, 48px) min(5%, 32px);
}

.sectionPadding {
  padding: min(10%, 32px) min(5%, 24px);
}

.mainHeadingAndSearch {
  height: 256px;
  width: 100%;

  padding-top: 48px;
  padding-left: 32px;
  padding-bottom: 48px;
  padding-right: 32px;
 
  background-image: url("/graphics/backgroundImages/hexagon.svg");
}

.homePageMainH5 {
  padding-top: min(5%, 24%);
  
  color: white;
}

.searchInputGroup
{ max-width: 610px 
}
@media (max-width: 690px) {
  .searchFilterButton {
    display: none; 
  } 
}
.searchIcon {
  margin: -0.4em;
}


.allCharts_container {
  margin-top: -64px;
  

  border-radius: 12px;
  
  background: white;
}
.allCharts_container h5 {
  margin-bottom: 0px;

  font-size: 1.0em;
}

.chartsSection {
  padding: 16px;
  
  border-radius: 8px;

  /* background-color: rgba(200, 200, 255, 0.3); */
}

</style>