// import { writable } from 'svelte/store';

// ALL IN ALL I RECKON WE CAN USE IT "UPSIDE DOWN" ACTUALLY

export function addIDValues(treeStructure, context = {})
  { 
    debugger;
    
    let returnObject = { success: false, warnings: []};

    // check required values
    if (context.uniqueTreeID            === undefined)  throw new Error("context must include a uniqueTreeID");
    if (!Array.isArray(treeStructure))                  throw new Error("treeStructure must contain an array at the root");
    
    // check recommended values
    if (context.recursionFieldName_list === undefined)
    { context.recursionFieldName_list = ["children"];
      returnObject.warnings.push("no recursionFieldName_list specified, defaulting to ['children']");
    }
    // if (context.activeItemID === undefined) 
    // { context.activeItemID = 0;
    //   // writable(context.defaultValue || 0);
    // }

    // set defaults
    context.uniqueID = 0;
    context.treeStructureAsListByID = {};
    context.markTreeItemActive = 
        (idOfActiveItem) =>
        { return markTreeItemActive(context, idOfActiveItem);
        }
    context.getTreeItemByID = 
        (idOfActiveItem) =>
        { return getTreeItemByID(context, idOfActiveItem);
        }
    
    // if (context.partiallyActiveIDList == undefined) context.partiallyActiveIDList = writable([]);

    context.currentAddress = [];

    let newTree = context.treeRoot = [];

    addIDValues_helper(treeStructure, context, newTree);
  }

function addIDValues_helper(treeStructure, context, newTree)
  {
    debugger;
    
    let parentID        = context.parentID;
    let currentAddress  = context.currentAddress;

    
    if (!Array.isArray(treeStructure))                  
    { throw new Error("treeStructure malformed at currentAddress. Object not an array at: "+JSON.stringify(currentAddress));
    }
    else
    { for (let [index, treeItem] of Object.entries(treeStructure))
      { 
        // iterative values walking through tree
        let uniqueID = context.uniqueID++;
        let newItemAddress = [...currentAddress, [index, uniqueID] ];
        

        let newTreeContextItem = { "data": treeItem };
        newTreeContextItem.id                       = uniqueID;
        newTreeContextItem.parentID                 = parentID;
        newTreeContextItem.address                  = newItemAddress

        newTree.push(newTreeContextItem);
        
        // maintain dict of items by uniqueID
        context.treeStructureAsListByID[uniqueID]   = newTreeContextItem;

        // recurse into children
        for (let treeItemKey of Object.keys(newTreeContextItem.data))
        { if (context.recursionFieldName_list.includes(treeItemKey))
          { 
            // recursion base values
            context.parentID = uniqueID;
            context.currentAddress = [...newItemAddress, [treeItemKey, null] ];

            newTreeContextItem[treeItemKey] = [];

            addIDValues_helper(treeItem[treeItemKey], context, newTreeContextItem[treeItemKey]);
          }
        }
      }
    }
  }

export function markTreeItemActive(treeStructureContext, idOfActiveItem)
{ 
  // basic constants
  const uniqueTreeID    = treeStructureContext.uniqueTreeID;

  // current working items
  let originalActiveItem;
  let activeItem      = originalActiveItem = treeStructureContext.treeStructureAsListByID[idOfActiveItem];
  let lastActiveItem  = treeStructureContext.activeItem;

  // no change in activeItem
  if (activeItem === lastActiveItem) return;

  
  let treeStructureAsListByID = treeStructureContext.treeStructureAsListByID;

  // let listOfObjectsToUpdate = [];
  // let listOfAddressesToUpdate = [];
  debugger;


  // let itemIterator;

  // let deactivateTargetAddress;
  // if (lastActiveItem !== undefined)
  // { 
  //   deactivateTargetAddress = lastActiveItem[uniqueTreeID].address;
  //   for (let addressItem of deactivateTargetAddress)
  //   { itemIterator = treeStructureContext.treeStructureAsListByID[uniqueID];
  //     itemIterator[uniqueTreeID].active = false;
  //     itemIterator[uniqueTreeID].partiallyActive = false;
  //   }
  // }

  // let activateTargetAddress = activeItem[uniqueTreeID].address;
  // let flag = false;
  // for (let [addressItem, uniqueID] of activateTargetAddress)
  // { 
  //   itemIterator = treeStructureContext.treeStructureAsListByID[uniqueID];
  //   if (flag === false) itemIterator[uniqueTreeID].active = true;
  //   else itemIterator[uniqueTreeID].partiallyActive = true;

  //   flag = true;
  // }

  // deactivate previously activeItem
  while (lastActiveItem !== undefined)
  { lastActiveItem[uniqueTreeID].active = false;
    lastActiveItem[uniqueTreeID].partiallyActive = false;
    
    lastActiveItem[uniqueTreeID] = lastActiveItem[uniqueTreeID];

    // listOfObjectsToUpdate.push(lastActiveItem);
    
    lastActiveItem = treeStructureAsListByID[lastActiveItem[uniqueTreeID].parentID];
  }

  // activate currently active item
  while (activeItem !== undefined)
  { 
    if (activeItem === originalActiveItem)
    { activeItem[uniqueTreeID].active = true;
    }
    else
    { activeItem[uniqueTreeID].partiallyActive = true;
    }

    // activeItem[uniqueTreeID] = activeItem[uniqueTreeID];

    // listOfObjectsToUpdate.push(activeItem);

    activeItem = treeStructureAsListByID[activeItem[uniqueTreeID].parentID];
  }

  treeStructureContext.activeItem = originalActiveItem;

  // return [deactivateTargetAddress, activateTargetAddress];

  // treeStructureContext.activeItemID.set(idOfActiveItem);
}

function getTreeItemByID(treeStructureContext, idOfActiveItem)
{
  return treeStructureContext.treeStructureAsListByID[idOfActiveItem];
}

export function updateList(list)
{
  list[0].children.push(Math.floor(Math.random() * 10));
  list[0].children = list[0].children;

  return list;
}