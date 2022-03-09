import React, { useEffect, useRef } from 'react';
import classes from "./Chart.module.css";
import { createChart, LineStyle, Range  } from 'lightweight-charts';

const Chart = ({data}) => {
    const chartContainerRef = useRef();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions();
            };

            const chart = createChart(chartContainerRef.current, {
                watermark: {
                    text: "Покупка EUR/USD",
                    visible: false,
                    color: 'rgba(0,0,0, 0.1)'
                },

                grid: {
                    vertLines: {
                        color: 'rgba(42, 46, 57, 0.05)',
                    },
                    horzLines: {
                        color: 'rgba(42, 46, 57, 0.05)',
                    },
                },
                crosshair: {
                    vertLine: {
                        width: 0,
                        color: 'rgba(224, 227, 235, 0.1)',
                        style: 0,
                        visible: false,
                        labelVisible: false,
                    },
                    horzLine: {
                        visible: false,
                        labelVisible: false,
                    },
                },

                layout: {
                    textColor: '#d1d4dc',
                    backgroundColor: '#fff',
                    fontSize: 12
                },
                rightPriceScale: {
                    autoScale: true,
                    drawTicks: true,
                    visible: true,
                    mode: 1,
                    scaleMargins: {
                        top: 0,
                        bottom: 0,
                    },
                },
                timeScale: {
                    visible: true
                },
                handleScroll: {
                    vertTouchDrag: false,
                    horzTouchDrag: false,
                    pressedMouseMove: false,
                    mouseWheel: false,

                },
                handleScale: {
                    pinch: false,
                    axisPressedMouseMove: false,
                    axisDoubleClickReset: false,
                    mouseWheel: false,
                },

            });

            const newSeries = chart.addAreaSeries({
                // lineColor: 'rgba(34, 160, 83, 1)',
                // topColor: 'rgba(224, 31, 25, .4)',
                // bottomColor: 'rgba(224, 31, 25, .01)',


                lineColor: 'rgba(38, 167, 154, 1)',
                topColor: 'rgba(38, 167, 154, .4)',
                bottomColor: 'rgba(38, 167, 154, .01)',
                //
                // lineColor: 'rgba(0, 120, 255, 1)',
                // topColor: 'rgba(0, 120, 255, 0.4)',
                // bottomColor: 'rgba(0, 120, 255, 0.01)',

                lineWidth: 1.6,
                crosshairMarkerVisible: false,
            });

            newSeries.setData(data);

            const stopLoss = {
                price: 15,
                color: 'red',
                lineWidth: '2',
                lineStyle: LineStyle.Solid,
                axisLabelVisible: true,
                title: 'Stop Loss',
            }

            const takeProfit = {
                price: 48,
                color: 'rgba(38, 167, 154, 1)',
                lineWidth: '2',
                lineStyle: LineStyle.Solid,
                axisLabelVisible: true,
                title: 'Take Profit',
                fontSize: 20,
            }

            // newSeries.setMarkers([{
            //     time: "2019-01-25",
            //     position: "aboveBar",
            //     color: 'rgba(38, 167, 154, 1)',
            //     shape: "arrowUp",
            // }])

            newSeries.createPriceLine(stopLoss);
            newSeries.createPriceLine(takeProfit);

            chart.timeScale().fitContent();

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data]
    );

    return (
        <div className={classes.chart}
            ref={chartContainerRef}
        />
    );
};

export default Chart;