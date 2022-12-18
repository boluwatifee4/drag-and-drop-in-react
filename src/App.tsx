
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import image from "./imgs/to-figma.png"
import React, { useState } from 'react';
import './App.css';
function App() {
  let url = "https://media.licdn.com/dms/image/C4E0BAQGRmWH29J1eWg/company-logo_100_100/0/1631194479115?e=1679529600&v=beta&t=w_kgWQe-XxGEW-iK8S_-TVuNboe7lG83tEq_WMTvMmg"
  const namesData = [
    {
      id: 2,
      name: "John",
      imageUrl: url
    },
    {
      id: 3,
      name: "Doe",
      imageUrl: url
    },
    {
      id: 4,
      name: "Smith",
      imageUrl: url
    },
    {
      id: 5,
      name: "Alex",
      imageUrl: url
    },
    {
      id: 6,
      name: "Micheal",
      imageUrl: url
    },

  ]

const [storedItems, setStoredItems] = useState(namesData);

function handleOnDragEnd(result: any) {
    const items = Array.from(storedItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setStoredItems(items);
}

  return (
    <div className="App">
      <h1>React beautiful Dnd</h1>

      <DragDropContext
        onDragEnd={handleOnDragEnd}
        onDragStart={() => { }}
      >
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div
              className='flex-center'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {storedItems.map((item, index) => {
                return (
                  <Draggable key={item?.id} draggableId={item?.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        className='items'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <img src={item.imageUrl
                        } alt="img" />
                        <p>{item.name}</p>
                      </div>
                    )}
                  </Draggable>
                )

              })}

              {provided.placeholder}
            </div>
          )}
        </Droppable>

      </DragDropContext>
    </div>
  );
}

export default App;
