import React from "react";
import Icon from "./Icon";
import { handleSetDragData } from "../utils/helpers";
import { widgetNames } from "../utils/constants";
import { useSelector } from "react-redux";

export default function Sidebar() {
  //state values
  const sliceStyles = useSelector((state) => state.style);

  return (
    <div className="w-70 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleSetDragData(e, widgetNames.move10Steps)}
      >
        {"Move"}
        <input
          type="text"
          style={{
            width: "25px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          value={10}
          onChange={() => void 0}
        />
        {"Steps"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) =>
          handleSetDragData(e, widgetNames.turn15DegreeComponentUndo)
        }
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        <input
          type="text"
          style={{
            width: "25px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          value={15}
          onChange={() => void 0}
        />
        {"degrees"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) =>
          handleSetDragData(e, widgetNames.turn15DegreeComponentRedo)
        }
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        <input
          type="text"
          style={{
            width: "25px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          value={15}
          onChange={() => void 0}
        />
        {"degrees"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) =>
          handleSetDragData(e, widgetNames.gotoXandYComponent)
        }
      >
        {"go to x :"}
        <input
          type="text"
          style={{
            width: "15px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          defaultValue={0}
          onChange={() => void 0}
        />
        {"y : "}
        <input
          type="text"
          style={{
            width: "15px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          defaultValue={0}
          onChange={() => void 0}
        />
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) =>
          handleSetDragData(e, widgetNames.gotoRandomPosition)
        }
      >
        {"go to random position"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) =>
          handleSetDragData(e, widgetNames.glideToRandomPosition)
        }
      >
        {"glide"}
        <input
          type="text"
          style={{
            width: "25px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          value={15}
          onChange={() => void 0}
        />
        {"secs to random position"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleSetDragData(e, widgetNames.setXPosition)}
      >
        {"Set x to"}
        <input
          type="text"
          style={{
            width: "25px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          value={sliceStyles.left}
          onChange={() => void 0}
        />
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleSetDragData(e, widgetNames.setYPosition)}
      >
        {"Set y to"}
        <input
          type="text"
          style={{
            width: "25px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          value={sliceStyles.left}
          onChange={() => void 0}
        />
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleSetDragData(e, widgetNames.changeYByValue)}
      >
        {"Change y by "}
        <input
          type="text"
          style={{
            width: "25px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          value={sliceStyles.left}
          onChange={() => void 0}
        />
      </div>
      {/* Looks Starts Here */}
      <div className="font-bold"> {"Looks"} </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-violet text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleSetDragData(e, widgetNames.sayHello)}
      >
        {"Say 'hello'"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-violet text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) =>
          handleSetDragData(e, widgetNames.sayHelloForSeconds)
        }
      >
        {"Say 'hello' for"}
        <input
          type="text"
          style={{
            width: "15px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          value={2}
          onChange={() => void 0}
        />
        {"seconds"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-violet text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleSetDragData(e, widgetNames.sayHmm)}
      >
        {"Say 'hmm'"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-violet text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleSetDragData(e, widgetNames.sayHmmForSeconds)}
      >
        {"Say 'hmm' for"}
        <input
          type="text"
          style={{
            width: "15px",
            color: "black",
            paddingLeft: "4px",
            margin: "0 4px",
            borderRadius: "40%",
          }}
          value={2}
          onChange={() => void 0}
        />
        {"seconds"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-violet text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleSetDragData(e, widgetNames.show)}
      >
        {"Show"}
      </div>
      <div
        draggable="true"
        className="flex flex-row flex-wrap bg-violet text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onDragStart={(e) => handleSetDragData(e, widgetNames.hide)}
      >
        {"Hide"}
      </div>
      {/* Looks Ends Here */}
    </div>
  );
}
