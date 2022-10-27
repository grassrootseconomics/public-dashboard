/** @module mainNavTreeUtil */

/** take an arbitrary tree defining the site navigation structure
 *   and add contextual data that will allow the utility to support site navigation
 *  @param treeStructure the tree data to operate on. This data will be altered! Each node in the tree will have an extra property holding its navigation context
 * 
 *  @param context this object will contain the data needed to implement site navigation
 * 
 *  @name contextPropertyExamle
 *  @memberOf mainNavTreeUtil.addIDValues
 *  @example
 *  let treeStructureNavContext = 
 *  { uniqueTreeID            : "mainMenuContentTree", 
 *    recursionFieldName_list : ["dropdownContent"]
 *  }
 *  // the uniqueTreeID is the name of the extra property that is assigned to each of the items in the navigation tree. This is required
 *  // the recursionFieldName_list is a list of any items that should be recursed as children. This defaults to "[children]"
 */
export function addIDValues(treeStructure, context = {})
  { 
    // debugger;
    
    let returnObject = { success: false, warnings: []};

    // check required values
    if (context.uniqueTreeID            === undefined)  throw new Error("context must include a uniqueTreeID");
    if (!Array.isArray(treeStructure))                  throw new Error("treeStructure must contain an array at the root");
    
    // check recommended values
    if (context.recursionFieldName_list === undefined)
    { context.recursionFieldName_list = ["children"];
      returnObject.warnings.push("no recursionFieldName_list specified, defaulting to ['children']");
    }
    if (context.urlFieldName === undefined)
    { context.urlFieldName = "url";
      returnObject.warnings.push("no urlFieldName specified, defaulting to 'url'");
    }

    // set up content of results
    context.treeNodesByID_dict  = {};
    context.treeNodesByURL_dict = {}
    context.markTreeItemActive  = 
        (idOfActiveItem) =>
        { return markTreeItemActive(context, idOfActiveItem);
        }
    context.getTreeItemByID     = 
        (idOfActiveItem) =>
        { return getTreeItemByID(context, idOfActiveItem);
        }

    // tools to use for iterative recursion state
    context.uniqueID            = 0;
    context.currentAddress      = [];

    addIDValues_helper(treeStructure, context);
  }
/** recursive helper function. traverses the nav hierarchy and builds and injects the context data (*/
function addIDValues_helper(treeStructure, context)
  {
    // debugger;
    
    let parentID        = context.parentID;
    let currentAddress  = context.currentAddress;

    
    if (!Array.isArray(treeStructure))                  
    { throw new Error("treeStructure malformed at currentAddress. Object not an array at: "+JSON.stringify(currentAddress));
    }
    else
    { for (let [index, treeItem] of Object.entries(treeStructure))
      { 
        // items we need to hold in the stack frame for recursion
        //    keep a simple count of how many nodes we have traversed
        let uniqueID        = context.uniqueID++;
        //    maintain an address of this current node from the root (may be useful)
        let newItemAddress  = [...currentAddress, [index, uniqueID] ];
      
        // create context storing data as a property of the original object (in general this might be
        //   a bad idea, but in this case it makes the most simple sense from DX point of view.
        if (treeItem[context.uniqueTreeID] === undefined) treeItem[context.uniqueTreeID] = {};
        let treeItemExtraData                     = treeItem[context.uniqueTreeID];
        treeItemExtraData.address                 = newItemAddress
        treeItemExtraData.id                      = uniqueID;
        treeItemExtraData.parentID                = parentID;
        
        context.treeNodesByID_dict[uniqueID]      = treeItem;

        for (let treeItemKey of Object.keys(treeItem))
        { if (context.recursionFieldName_list.includes(treeItemKey))
          { 
            context.parentID = uniqueID;
            context.currentAddress = [...newItemAddress, treeItemKey];

            addIDValues_helper(treeItem[treeItemKey], context);
          }
        }
      }
    }
  }


/** mark the context of an item of the navigation hierarchy as active. Mark all its ancestors as partiallyActive
 * @param treeStructureContext the context as built by the mainNavTreeUtil.addIDValues function
 * @param idOfActiveItem the uniqueID of the item context, as injected by mainNavTreeUtil.addIDValues
 */
export function markTreeItemActive(treeStructureContext, idOfActiveItem)
{ 
  // the name of our injected property
  const uniqueTreeID    = treeStructureContext.uniqueTreeID;

  // current working items
  let originalActiveItem;
  let activeItem      = originalActiveItem = treeStructureContext.treeNodesByID_dict[idOfActiveItem];
  let lastActiveItem  = treeStructureContext.activeItem;

  // no change in activeItem, so return;
  if (activeItem === lastActiveItem) return;
  
  // make source easier to read
  let treeNodesByID_dict = treeStructureContext.treeNodesByID_dict;


  // deactivate previously activeItem
  while (lastActiveItem !== undefined)
  { lastActiveItem[uniqueTreeID].active = false;
    lastActiveItem[uniqueTreeID].partiallyActive = false;
    
    lastActiveItem = treeNodesByID_dict[lastActiveItem[uniqueTreeID].parentID];
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

    activeItem = treeNodesByID_dict[activeItem[uniqueTreeID].parentID];
  }

  treeStructureContext.activeItem = originalActiveItem;
}

export function getTreeItemByID(treeStructureContext, idOfActiveItem)
{
  return treeStructureContext.treeNodesByID_dict[idOfActiveItem];
}
