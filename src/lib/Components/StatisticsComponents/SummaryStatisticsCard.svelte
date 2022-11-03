<script>

  export let statisticsData = {};

  // maybe process the values so that they are in human readable number format at 3SF

  console.log(JSON.stringify(statisticsData, null, 2));

</script>

<div class="summaryStatisticsContainer col-md-4 col-lg-6 u-ver-divider u-ver-divider--left u-ver-divider--none-md">
  <div class="d-flex flex-row">
    <div class="summaryStatisticHeader d-flex flex-column align-self-center">
      <!-- <iconify-icon  icon={statisticsData.iconString} aria-hidden="true" ></iconify-icon> -->
      <img src="/graphics/ge-logo-imageOnly-vertical-38x70.png" alt="GE logo dynamic" />
    </div>
    <div class="summaryStatisticBody d-flex flex-column flex-grow-1">
      <div class="summaryStatisticTitle">
        <div class="text-uppercase" >
            {statisticsData.title}
        </div>
      </div>
      {#each statisticsData.rows as rowData}
      <div class="summaryStatisticContent d-flex flex-row justify-content-between flex-grow-1">
        <div class="d-flex flex-column">
          <div class="d-flex flex-row">
            <div class="summaryStatistic_total">{rowData.value}
            </div>
            <sub class="small align-self-center" class:d-none={rowData.valuePostfix===undefined}>{rowData.valuePostfix}
            </sub>
          </div>
        </div>
          
        <div class="d-flex flex-column algin-self-end">
          {#if rowData.valueRelativePercentage !== undefined}
            {@const relativeDirection = rowData.valueRelativePercentage > 0?"up":rowData.valueRelativePercentage<0?"down":"flat"}
            <div class="d-flex flex-row">
              <div class="small">{rowData.valueRelativePercentage}% </div>
              <div class="relativeDirectionIcon">
                {#if relativeDirection === "up"}
                  <iconify-icon class="relativeDirectionIcon relativeUp" inline icon="carbon:increase-level"></iconify-icon>
                {:else if relativeDirection="down"}
                  <iconify-icon class="relativeDirectionIcon relativeDown" inline icon="carbon:increase-level" flip="vertical"></iconify-icon>
                {:else if relativeDirection="flat"}
                  <iconify-icon class="relativeDirectionIcon relativeFlat" inline icon="material-symbols:trending-flat-rounded"></iconify-icon>
                {/if}
              </div>
            </div>
          {/if}
        </div>
      </div>

        
          
        <!-- </div> -->
      {/each}
    </div>
    
  </div>
  
  
</div>

<style>
.summaryStatisticsContainer
{ border-radius: 8px;
  
  /* border-right: 1px solid lightgray; */
}

.summaryStatisticBody {
  padding-bottom: 12px;

  font-size: 0.9em;
}
.summaryStatisticHeader {
  padding-right: 8px;
}
.summaryStatisticHeader > img {
  max-height: 32px;
}

.summaryStatisticTitle {
  padding-top: 16px;
  
  font-weight: 600;
  color: rgb(90 90 90);
}

.summaryStatisticContent {
  /* border-right: 1px gray solid; */
}

.relativeDirectionIcon {
  margin-top: -0.2em;
  
  font-size: 1.3em;
}
.relativeDirectionIcon.relativeDown {
  margin-top: 0.1em;
}
.relativeUp {
  color: lightgreen;
}
.relativeDown {
  color: goldenrod;
}
.relativeFlat {
  color: lightblue;
}


</style>

