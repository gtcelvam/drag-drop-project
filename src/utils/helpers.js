export const handleSetDragData = (e, widgetName) => {
  e.dataTransfer.setData("widget-data", widgetName);
};

export const handleGetDropData = (e, cb) => {
  e.preventDefault();
  const widgetName = e.dataTransfer.getData("widget-data");
  cb(widgetName);
};

export const handleDragOver = (e) => e.preventDefault();

export const generateRandomNumber = ()=> Math.floor(Math.random() * 201) - 100;
