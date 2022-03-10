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
                    mode: 0,
                    vertLine: {
                        width: 0,
                        color: 'rgba(224, 227, 235, 0.1)',
                        style: 0,
                        visible: false,
                        // labelVisible: false,
                    },
                    horzLine: {
                        visible: false,
                        // labelVisible: false,
                    },
                },

                layout: {
                    textColor: '#d1d4dc',
                    backgroundColor: '#fff',
                    fontSize: 13
                },
                rightPriceScale: {
                    autoScale: true,
                    drawTicks: true,
                    visible: true,
                    mode: 0,
                    scaleMargins: {
                        top: 0.05,
                        bottom: 0.05,
                    },
                    // invertScale: true
                },
                timeScale: {
                    visible: true,
                    fixLeftEdge: true,
                    fixRightEdge: true,
                    rightOffset: 0
                },
                // handleScroll: {
                //     vertTouchDrag: false,
                //     horzTouchDrag: false,
                //     pressedMouseMove: false,
                //     mouseWheel: false,
                //
                // },
                // handleScale: {
                //     pinch: false,
                //     axisPressedMouseMove: false,
                //     axisDoubleClickReset: false,
                //     mouseWheel: false,
                // },
            });

            const newSeries = chart.addAreaSeries({
                // lineColor: 'rgba(34, 160, 83, 1)',
                // topColor: 'rgba(224, 31, 25, .4)',
                // bottomColor: 'rgba(224, 31, 25, .01)',
                priceFormat: {
                    minMove: 0.00001,
                },
                // lastValueVisible: false,
                // title: 'Buy',
                lineColor: 'rgba(38, 167, 154, 1)',
                priceLineSource: 1,
                topColor: 'rgba(38, 167, 154, .4)',
                bottomColor: 'rgba(38, 167, 154, .01)',
                lastPriceAnimation: 2,
                // lineColor: 'rgba(0, 120, 255, 1)',
                // topColor: 'rgba(0, 120, 255, 0.4)',
                // bottomColor: 'rgba(0, 120, 255, 0.01)',
                lineWidth: 1.6,
                autoScaleInfoProvider: {
                    priceRange: {
                        minValue: 2,
                        maxValue: 2,
                    },
                },
                // crosshairMarkerVisible: false,
            });

            newSeries.options()

            newSeries.setData(data);

            const stopLoss = {
                price: 1.09,
                color: 'red',
                lineWidth: '3',
                lineStyle: LineStyle.Dashed,
                axisLabelVisible: true,
                title: 'Stop',
            }

            const takeProfit = {
                price: 1.120,
                color: 'rgba(38, 167, 154, 1)',
                lineWidth: '3',
                lineStyle: LineStyle.Dashed,
                axisLabelVisible: true,
                title: 'Target',
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
            // chart.timeScale().scrollToPosition(1.10552, true)

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