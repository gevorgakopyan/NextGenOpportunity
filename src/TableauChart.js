import React, { useEffect, useRef, useCallback } from 'react';

const TableauChart = ({ url, options }) => {
  const ref = useRef(null);
  const vizRef = useRef(null);

  const initViz = useCallback(() => {
    // Dispose the existing viz before creating a new one
    if (vizRef.current) {
      vizRef.current.dispose();
    }
    vizRef.current = new window.tableau.Viz(ref.current, url, options);
  }, [url, options]); // Dependencies of initViz

  useEffect(() => {
    initViz();
    return () => {
      // Dispose the viz when the component unmounts
      if (vizRef.current) {
        vizRef.current.dispose();
      }
    };
  }, [initViz]); // Dependency array now correctly includes initViz

  return <div ref={ref}></div>;
};

export default TableauChart;