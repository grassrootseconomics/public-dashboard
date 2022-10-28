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

  <div
    class="homePageStatistics card mx-3 mx-md-4 mx-lg-5 mt-n5 p-3 p-md-4 p-lg-5"
  >
    <div class="card-body p-4">
      <div class="row mx-gutters-md-1 align-items-center">
        <div class="col-md-6 col-lg-4">
          <div class="media align-items-center">
            <figure class="u-sm-avatar mr-2">
              <div class="u-xs-avatar mx-auto">
                <img
                  src="/images/svg/brands/ethereum-1.svg"
                  alt="Ethereum Logo"
                />
              </div>
            </figure>
            <div class="media-body">
              <h2 class="font-size-1 text-uppercase text-secondary mb-0">
                Ether Price
              </h2>
              <a
                class="text-size-1 text-link"
                href="/chart/etherprice"
                rel="tooltip"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="View Historical Ether Price"
                >$1,520.29<span class="text-secondary">
                  @ 0.07497 BTC</span
                ><span class="text-danger small"> (-1.52%)</span></a
              >
            </div>
          </div>
          <hr class="hr-space-lg" />
          <div class="media align-items-center">
            <figure class="u-sm-avatar mr-2">
              <img src="/images/svg/icons/icon-8.svg?v=1.3" alt="SVG" />
            </figure>
            <div class="media-body">
              <h2 class="font-size-1 text-uppercase text-secondary mb-0">
                Market Cap
              </h2>
              <a
                class="text-size-1 text-link"
                data-toggle="tooltip"
                data-placement="top"
                data-title="View More"
                href="/stat/supply"
                data-original-title=""
                title=""
              >
                $183,227,953,957.00
              </a>
            </div>
          </div>
          <hr class="d-block d-md-none hr-space-lg" />
        </div>

        <div
          class="col-md-6 col-lg-4 u-ver-divider u-ver-divider--left u-ver-divider--none-md"
        >
          <div class="media row align-items-center">
            <figure class="u-sm-avatar mr-2">
              <img
                src="/images/svg/icons/icon-2-1.svg?v=1.3"
                alt="Transaction"
              />
            </figure>
            <div class="media-body col">
              <h2 class="font-size-1 text-uppercase text-secondary mb-0">
                Transactions
              </h2>
              <a
                href="/txs"
                class="text-size-1 text-link"
                rel="tooltip"
                data-toggle="tooltip"
                data-placement="left"
                data-html="true"
                title=""
                data-original-title="Total Transactions Counter<br>(Update every 5 mins)"
                >1,759.78 M</a
              ><span
                class="text-secondary small"
                rel="tooltip"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Transactions per Second"
              >
                (12.2 TPS)</span
              >
            </div>
            <div class="text-right col" title="GasTracker Estimate for Average Gas">
              <h2 class="font-size-1 text-uppercase text-secondary mb-0">
                Med Gas Price
              </h2>
              <a
                href="/gastracker"
                class="text-size-1 text-link"
                data-toggle="tooltip"
                data-html="true"
                title=""
                data-original-title="Base Fee: 11 Gwei<br>Priority Fee: 2 Gwei"
                >13 Gwei <span class="text-secondary small">($0.42)</span></a
              >
            </div>
          </div>
          <hr class="hr-space-lg" />
          <div class="media row align-items-center">
            <figure
              class="u-sm-avatar mr-2"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Last Safe and Finalized Blocks"
            >
              <img src="/images/svg/icons/icon-51.svg" alt="SVG" />
            </figure>
            <div class="media-body col">
              <h2 class="font-size-1 text-uppercase text-secondary mb-0">
                Last Finalized Block
              </h2>
              <div class="text-size-1">
                <span
                  rel="tooltip"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  stake=""
                  data-original-title="This block is finalized and cannot be reverted without slashing at least 1/3 of all validators"
                  >15846706</span
                >
              </div>
            </div>
            <div class="text-right col">
              <h2 class="font-size-1 text-uppercase text-secondary mb-0">
                Last Safe Block
              </h2>
              <div class="text-size-1">
                <span
                  rel="tooltip"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="This block is safe and is unlikely to be reverted."
                  >15846738</span
                >
              </div>
            </div>
          </div>
          <hr class="d-block d-md-none hr-space-lg" />
        </div>

        <div
          class="col-md-12 col-lg-4 u-ver-divider u-ver-divider--left u-ver-divider--none-lg"
        >
          <hr class="d-none d-md-block d-lg-none my-4" />
          <div class="d-flex justify-content-between  align-items-center">
            <h2 class="font-size-1 text-uppercase text-secondary mb-0">
              Ethereum Transaction History in 14 days
            </h2>
            <div class="position-relative float-right z-index-2">
              <a
                id="customchartsinvoker"
                class="btn btn-xs btn-icon btn-soft-secondary"
                href="javascript:;"
                role="button"
                aria-controls="customcharts"
                aria-haspopup="true"
                aria-expanded="false"
                data-unfold-event="click"
                data-unfold-target="#customcharts"
                data-unfold-type="css-animation"
                data-unfold-duration="300"
                data-unfold-delay="300"
                data-unfold-hide-on-scroll="true"
                data-unfold-animation-in="slideInUp"
                data-unfold-animation-out="fadeOut"
              >
                <i class="fa fa-ellipsis-v btn-icon__inner" />
              </a>
              <div
                id="customcharts"
                class="dropdown-menu dropdown-menu-right dropdown-unfold u-unfold--css-animation u-unfold--hidden fadeOut"
                aria-labelledby="customchartsinvoker"
                style="animation-duration: 300ms; right: 0px;"
              >
                <a class="dropdown-item" href="/chart/tx">View Detailed Chart</a
                >
              </div>
            </div>
          </div>
          <div
            id="container-1"
            class="w-100 pt-2"
            style="height: 106px; overflow: hidden;"
            data-highcharts-chart="0"
          >
            <div
              id="highcharts-dsjj68d-0"
              dir="ltr"
              class="highcharts-container "
              style="position: relative; overflow: hidden; width: 557px; height: 98px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none; touch-action: manipulation; outline: none;"
            >
              <svg
                version="1.1"
                class="highcharts-root"
                style="font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif; font-size: 12px;"
                xmlns="http://www.w3.org/2000/svg"
                width="557"
                height="98"
                viewBox="0 0 557 98"
                role="img"
                aria-label=""
                ><desc>Created with Highcharts 10.2.1</desc><defs
                  ><clipPath id="highcharts-dsjj68d-1-"
                    ><rect
                      x="0"
                      y="0"
                      width="498"
                      height="68"
                      fill="none"
                    /></clipPath
                  ><clipPath id="highcharts-dsjj68d-17-"
                    ><rect
                      x="0"
                      y="0"
                      width="498"
                      height="68"
                      fill="none"
                    /></clipPath
                  ></defs
                ><rect
                  fill="#ffffff"
                  class="highcharts-background"
                  x="0"
                  y="0"
                  width="557"
                  height="98"
                  rx="0"
                  ry="0"
                /><rect
                  fill="none"
                  class="highcharts-plot-background"
                  x="49"
                  y="10"
                  width="498"
                  height="68"
                /><g
                  class="highcharts-grid highcharts-xaxis-grid"
                  data-z-index="1"
                  ><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 81.5 10 L 81.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 114.5 10 L 114.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 148.5 10 L 148.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 181.5 10 L 181.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 214.5 10 L 214.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 247.5 10 L 247.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 280.5 10 L 280.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 314.5 10 L 314.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 347.5 10 L 347.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 380.5 10 L 380.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 413.5 10 L 413.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 446.5 10 L 446.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 480.5 10 L 480.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 513.5 10 L 513.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 546.5 10 L 546.5 78"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 48.5 10 L 48.5 78"
                    opacity="1"
                  /></g
                ><g
                  class="highcharts-grid highcharts-yaxis-grid"
                  data-z-index="1"
                  ><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 49 78.5 L 547 78.5"
                    opacity="1"
                  /><path
                    fill="none"
                    stroke-dasharray="none"
                    data-z-index="1"
                    class="highcharts-grid-line"
                    d="M 49 10.5 L 547 10.5"
                    opacity="1"
                  /></g
                ><rect
                  fill="none"
                  class="highcharts-plot-border"
                  data-z-index="1"
                  x="49"
                  y="10"
                  width="498"
                  height="68"
                /><g class="highcharts-axis highcharts-xaxis" data-z-index="2"
                  ><path
                    fill="none"
                    class="highcharts-axis-line"
                    data-z-index="7"
                    d="M 49 78 L 547 78"
                  /></g
                ><g class="highcharts-axis highcharts-yaxis" data-z-index="2"
                  ><path
                    fill="none"
                    class="highcharts-axis-line"
                    data-z-index="7"
                    d="M 49 10 L 49 78"
                  /></g
                ><g class="highcharts-series-group" data-z-index="3"
                  ><g
                    class="highcharts-series highcharts-series-0 highcharts-spline-series"
                    data-z-index="0.1"
                    opacity="1"
                    transform="translate(49,10) scale(1 1)"
                    clip-path="url(#highcharts-dsjj68d-17-)"
                    ><path
                      fill="none"
                      d="M 16.6 16.1225875 C 16.6 16.1225875 36.519999999999996 23.556305000000005 49.8 27.2223125 C 63.08 30.88832 69.72 30.575902499999994 83 34.452625 C 96.28 38.3293475 102.92 46.605925 116.2 46.605925 C 129.48000000000002 46.605925 136.12 26.974112499999997 149.4 26.974112499999997 C 162.68 26.974112499999997 169.32 29.205575000000003 182.6 29.205575000000003 C 195.88 29.205575000000003 202.52000000000004 27.625722499999995 215.8 23.672075 C 229.08 19.718427499999997 235.71999999999997 9.437337499999998 249 9.437337499999998 C 262.28000000000003 9.437337499999998 268.91999999999996 9.437337499999998 282.2 17.675325 C 295.47999999999996 25.913312500000004 302.12 51.123887499999995 315.4 51.123887499999995 C 328.68 51.123887499999995 335.32000000000005 43.81614 348.6 40.4236625 C 361.88 37.031185 368.52000000000004 35.78635999999999 381.8 34.1615 C 395.08000000000004 32.53663999999999 401.71999999999997 34.1615 415 32.2993625 C 428.28000000000003 30.437225000000005 434.91999999999996 21.74703749999999 448.2 20.246362499999996 C 461.4799999999999 18.745687500000003 481.4 18.745687500000003 481.4 18.745687500000003"
                      class="highcharts-graph"
                      data-z-index="1"
                      stroke="#1e2022"
                      stroke-width="1"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    /><path
                      fill="none"
                      d="M 16.6 16.1225875 C 16.6 16.1225875 36.519999999999996 23.556305000000005 49.8 27.2223125 C 63.08 30.88832 69.72 30.575902499999994 83 34.452625 C 96.28 38.3293475 102.92 46.605925 116.2 46.605925 C 129.48000000000002 46.605925 136.12 26.974112499999997 149.4 26.974112499999997 C 162.68 26.974112499999997 169.32 29.205575000000003 182.6 29.205575000000003 C 195.88 29.205575000000003 202.52000000000004 27.625722499999995 215.8 23.672075 C 229.08 19.718427499999997 235.71999999999997 9.437337499999998 249 9.437337499999998 C 262.28000000000003 9.437337499999998 268.91999999999996 9.437337499999998 282.2 17.675325 C 295.47999999999996 25.913312500000004 302.12 51.123887499999995 315.4 51.123887499999995 C 328.68 51.123887499999995 335.32000000000005 43.81614 348.6 40.4236625 C 361.88 37.031185 368.52000000000004 35.78635999999999 381.8 34.1615 C 395.08000000000004 32.53663999999999 401.71999999999997 34.1615 415 32.2993625 C 428.28000000000003 30.437225000000005 434.91999999999996 21.74703749999999 448.2 20.246362499999996 C 461.4799999999999 18.745687500000003 481.4 18.745687500000003 481.4 18.745687500000003"
                      data-z-index="2"
                      class="highcharts-tracker-line"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="rgba(192,192,192,0.0001)"
                      stroke-width="21"
                      style="cursor: pointer;"
                    /></g
                  ><g
                    class="highcharts-markers highcharts-series-0 highcharts-spline-series highcharts-tracker"
                    data-z-index="0.1"
                    opacity="1"
                    transform="translate(49,10) scale(1 1)"
                    clip-path="none"
                    style="cursor: pointer;"
                    ><path
                      fill="#1e2022"
                      d="M 159 32.2993625 A 0 0 0 1 1 159 32.2993625 Z"
                      class="highcharts-halo highcharts-color-undefined"
                      data-z-index="-1"
                      fill-opacity="0.25"
                      visibility="hidden"
                    /><path
                      fill="#1e2022"
                      d="M 0 0"
                      stroke="#ffffff"
                      stroke-width="1"
                      opacity="1"
                      class="highcharts-point"
                      visibility="hidden"
                    /></g
                  ></g
                ><text
                  x="0"
                  text-anchor="start"
                  class="highcharts-title"
                  data-z-index="4"
                  style="color: rgb(51, 51, 51); font-size: 18px; fill: rgb(51, 51, 51);"
                  y="24"
                /><text
                  x="274"
                  text-anchor="middle"
                  class="highcharts-subtitle"
                  data-z-index="4"
                  style="color: rgb(102, 102, 102); fill: rgb(102, 102, 102);"
                  y="24"
                /><text
                  x="0"
                  text-anchor="start"
                  class="highcharts-caption"
                  data-z-index="4"
                  style="color: rgb(102, 102, 102); fill: rgb(102, 102, 102);"
                  y="110"
                /><g
                  class="highcharts-axis-labels highcharts-xaxis-labels"
                  data-z-index="7"
                  ><text
                    x="65.6"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    y="97"
                    opacity="1">Oct 13</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 14</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 15</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 16</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 17</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 18</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 19</text
                  ><text
                    x="298"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    y="97"
                    opacity="1">Oct 20</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 21</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 22</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 23</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 24</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 25</text
                  ><text
                    x="0"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    visibility="hidden">Oct 26</text
                  ><text
                    x="530.4"
                    text-anchor="middle"
                    transform="translate(0,0)"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    y="97"
                    opacity="1">Oct 27</text
                  ></g
                ><g
                  class="highcharts-axis-labels highcharts-yaxis-labels"
                  data-z-index="7"
                  ><text
                    x="34"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    text-anchor="end"
                    transform="translate(0,0)"
                    y="83"
                    opacity="1">880k</text
                  ><text
                    x="34"
                    style="color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);"
                    text-anchor="end"
                    transform="translate(0,0)"
                    y="15"
                    opacity="1">1 200k</text
                  ></g
                ><g
                  class="highcharts-label highcharts-tooltip highcharts-color-undefined"
                  data-z-index="8"
                  style="cursor: default; white-space: nowrap; pointer-events: none;"
                  transform="translate(47,6)"
                  opacity="0"
                  visibility="hidden"
                  ><path
                    fill="none"
                    class="highcharts-label-box highcharts-tooltip-box highcharts-shadow"
                    d="M 3.5 0.5 L 142.5 0.5 C 145.5 0.5 145.5 0.5 145.5 3.5 L 145.5 30 L 151.5 36 L 145.5 42 L 145.5 70.5 C 145.5 73.5 145.5 73.5 142.5 73.5 L 3.5 73.5 C 0.5 73.5 0.5 73.5 0.5 70.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                    stroke="#000000"
                    stroke-opacity="0.049999999999999996"
                    stroke-width="5"
                    transform="translate(1, 1)"
                  /><path
                    fill="none"
                    class="highcharts-label-box highcharts-tooltip-box highcharts-shadow"
                    d="M 3.5 0.5 L 142.5 0.5 C 145.5 0.5 145.5 0.5 145.5 3.5 L 145.5 30 L 151.5 36 L 145.5 42 L 145.5 70.5 C 145.5 73.5 145.5 73.5 142.5 73.5 L 3.5 73.5 C 0.5 73.5 0.5 73.5 0.5 70.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                    stroke="#000000"
                    stroke-opacity="0.09999999999999999"
                    stroke-width="3"
                    transform="translate(1, 1)"
                  /><path
                    fill="none"
                    class="highcharts-label-box highcharts-tooltip-box highcharts-shadow"
                    d="M 3.5 0.5 L 142.5 0.5 C 145.5 0.5 145.5 0.5 145.5 3.5 L 145.5 30 L 151.5 36 L 145.5 42 L 145.5 70.5 C 145.5 73.5 145.5 73.5 142.5 73.5 L 3.5 73.5 C 0.5 73.5 0.5 73.5 0.5 70.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                    stroke="#000000"
                    stroke-opacity="0.15"
                    stroke-width="1"
                    transform="translate(1, 1)"
                  /><path
                    fill="rgba(247,247,247,0.85)"
                    class="highcharts-label-box highcharts-tooltip-box"
                    d="M 3.5 0.5 L 142.5 0.5 C 145.5 0.5 145.5 0.5 145.5 3.5 L 145.5 30 L 151.5 36 L 145.5 42 L 145.5 70.5 C 145.5 73.5 145.5 73.5 142.5 73.5 L 3.5 73.5 C 0.5 73.5 0.5 73.5 0.5 70.5 L 0.5 3.5 C 0.5 0.5 0.5 0.5 3.5 0.5"
                    stroke="#1e2022"
                    stroke-width="1"
                  /><text
                    x="8"
                    data-z-index="1"
                    y="18"
                    style="color: rgb(51, 51, 51); font-size: 12px; fill: rgb(51, 51, 51);"
                    ><tspan style="font-size: 10px;"
                      >Tuesday, October 25, 2022</tspan
                    ><tspan class="highcharts-br" dy="15" x="8">​</tspan><tspan
                      ><tspan
                        ><tspan
                          ><tspan style="padding: 0px;"
                            ><tspan
                              style="color: rgb(30, 32, 34); fill: rgb(30, 32, 34);"
                              >Transactions:
                            </tspan><tspan style="font-weight: bold;"
                              >1,048,003</tspan
                            ><tspan class="highcharts-br" dy="15" x="8">​</tspan
                            ><tspan class="highcharts-br" dy="15" x="8">​</tspan
                            >Price: $1,460.37</tspan
                          ></tspan
                        ></tspan
                      ></tspan
                    ></text
                  ></g
                ></svg
              >
            </div>
          </div>
        </div>
      </div>
    </div>
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
  .font-size-1 {
    font-size: 0.8em;
  }
  .text-size-1 {
    font-size: 0.7em;
  }
</style>
