import { writable } from 'svelte/store';

let uniqueTreeCounter = 0;

export function addIDValues(treeStructure, context = {})
  { 
    debugger;
    
    if (context.recursionFieldName_list === undefined) context.recursionFieldName_list = [];
    if (context.uniqueTreeID            === undefined) context.uniqueTreeID = "__treeUtil_tree"+uniqueTreeCounter++;
    if (context.uniqueID                === undefined) context.uniqueID = 0;
    if (context.treeStructureAsListByID === undefined) context.treeStructureAsListByID = {};
    if (context.markTreeItemActive      === undefined) context.markTreeItemActive = 
        (idOfActiveItem) =>
        { return markTreeItemActive(context, idOfActiveItem);
        }
    if (context.getTreeItemByID         === undefined) context.getTreeItemByID = 
        (idOfActiveItem) =>
        { return getTreeItemByID(context, idOfActiveItem);
        }
    if (context.activeItemID === undefined) context.activeItemID = writable(context.defaultValue || 0);
    if (context.partiallyActiveIDList == undefined) context.partiallyActiveIDList = writable([]);

    if (context.currentAddress === undefined) context.currentAddress = [];

    let parentID = context.parentID;
    let currentAddress = context.currentAddress;

    if (Array.isArray(treeStructure))
    { for (let [index, treeItem] of Object.entries(treeStructure))
      { 
        let uniqueID = context.uniqueID++;

        let newItemAddress = [...currentAddress, [index, uniqueID] ];
        
        if (treeItem[context.uniqueTreeID] === undefined) treeItem[context.uniqueTreeID] = {};
        
        let treeItemExtraData                     = treeItem[context.uniqueTreeID];
        treeItemExtraData.address = newItemAddress


        treeItemExtraData.id                      = uniqueID;
        treeItemExtraData.parentID                = parentID;
        context.treeStructureAsListByID[uniqueID] = treeItem;

        for (let treeItemKey of Object.keys(treeItem))
        { if (context.recursionFieldName_list.includes(treeItemKey))
          { 
            context.parentID = uniqueID;

            context.currentAddress = [...newItemAddress, treeItemKey];

            addIDValues(treeItem[treeItemKey], context);
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