import React, { useEffect, useRef } from 'react';
import classes from "./Chart.module.css";
import { createChart, LineStyle, Range } from 'lightweight-charts';

const Chart = ({ initialData, barsData, isTrue }) => {
    const chartContainerRef = useRef();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions();
            };

            const chart = createChart(chartContainerRef.current, {
                watermark: {
                    text: "Покупка EUR/USD",
                    color: 'rgba(0,0,0, 0.1)',
                    visible: false
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
                        visible: false,
                        width: 1,
                        color: 'rgba(0, 0, 0, 0.2)',
                        style: 0,
                        labelVisible: false,
                    },
                    horzLine: {
                        visible: false,
                        labelVisible: false,
                        width: 1,
                        color: 'rgba(0, 0, 0, 0.2)',
                        style: 0,
                    },
                },

                layout: {
                    textColor: '#d1d4dc',
                    backgroundColor: '#fff',
                    fontSize: 13
                },
                rightPriceScale: {
                    autoScale: true,
                    entireTextOnly: true,
                    drawTicks: true,
                    visible: true,
                    mode: 0,
                    scaleMargins: {
                        top: 0.1,
                        bottom: 0.1,
                    },
                    alignLabels: true,
                    borderColor: 'rgba(0,0,0, 0.1)',
                },
                timeScale: {
                    visible: true,
                    // fixLeftEdge: true,
                    // fixRightEdge: true,
                    rightOffset: 2.5,
                    borderColor: 'rgba(0,0,0, 0)',

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
                }
            });

            if (isTrue === true) {
                const newSeries = chart.addAreaSeries({
                    lineColor: 'rgba(34, 160, 83, 1)',
                    topColor: 'rgba(224, 31, 25, .4)',
                    bottomColor: 'rgba(224, 31, 25, .01)',
                    priceFormat: {
                        minMove: 0.00001,
                    },
                    // title: 'Buy',
                    lineColor: 'rgba(38, 167, 154, 0.8)',
                    priceLineSource: 2,
                    topColor: 'rgba(38, 167, 154, .3)',
                    bottomColor: 'rgba(38, 167, 154, 0)',
                    lastPriceAnimation: 2,
                    // lastValueVisible: false,

                    priceLineVisible: false,
                    lastValueVisible: false,
                    priceLineWidth: 2,
                    priceLineStyle: LineStyle.Dashed,
                    // lineColor: 'rgba(0, 120, 255, 1)',
                    // topColor: 'rgba(0, 120, 255, 0.4)',
                    // bottomColor: 'rgba(0, 120, 255, 0.01)',
                    lineWidth: 2,
                    autoScaleInfoProvider: {
                        priceRange: {
                            minValue: 2,
                            maxValue: 2,
                        },
                    },
                    crosshairMarkerVisible: false,
                });

                newSeries.priceScale().width()
                newSeries.setData(initialData)

                const currentPrice = {
                    price: 1.115,
                    color: 'rgba(38, 167, 154, 1)',
                    // color: 'rgba(0,0,0,0)',
                    lineWidth: '1',
                    lineStyle: LineStyle.Dashed,
                    axisLabelVisible: true,
                    title: 'Покупка',
                }

                const takeProfit = {
                    price: 1.135,
                    // color: 'rgba(43, 92, 250, 0)',
                    color: 'rgba(38, 167, 154, 1)',
                    // color: 'rgba(0,0,0,0)',
                    lineWidth: '1',
                    lineStyle: LineStyle.Dashed,
                    axisLabelVisible: true,
                    title: 'Цель',
                }

                const stopLoss = {
                    price: 1.08495,
                    color: 'rgba(247, 40, 40, 1)',
                    // color: 'rgba(0,0,0,0)',
                    lineWidth: '1',
                    lineStyle: LineStyle.Dashed,
                    axisLabelVisible: true,
                    title: 'Стоп',
                }

                newSeries.createPriceLine(stopLoss);
                newSeries.createPriceLine(takeProfit);
                newSeries.createPriceLine(currentPrice);

            } else {

                const newSeries = chart.addCandlestickSeries({
                    lastValueVisible: false,
                    priceLineVisible: false,
                    priceFormat: {
                        minMove: 0.00001,
                    },
                    borderVisible: true,

                    // upColor: '#fff',
                    // borderUpColor: '#000',
                    // downColor: '#000',
                    // borderDownColor: '#000',
                    // wickColor: 'rgba(0,0,0, 0.7)'

                });

                newSeries.priceScale().width()
                newSeries.setData(barsData)

                const currentPrice = {
                    price: 1.115,
                    color: 'rgba(38, 167, 154, 1)',
                    // color: 'rgba(0,0,0,0)',
                    lineWidth: '1',
                    lineStyle: LineStyle.Dashed,
                    axisLabelVisible: true,
                    title: 'Покупка',
                }

                const takeProfit = {
                    price: 1.135,
                    // color: 'rgba(43, 92, 250, 0)',
                    color: 'rgba(38, 167, 154, 1)',
                    // color: 'rgba(0,0,0,0)',
                    lineWidth: '1',
                    lineStyle: LineStyle.Dashed,
                    axisLabelVisible: true,
                    title: 'Цель',
                }

                const stopLoss = {
                    price: 1.08495,
                    color: 'rgba(247, 40, 40, 1)',
                    // color: 'rgba(0,0,0,0)',
                    lineWidth: '1',
                    lineStyle: LineStyle.Dashed,
                    axisLabelVisible: true,
                    title: 'Стоп',
                }

                newSeries.createPriceLine(stopLoss);
                newSeries.createPriceLine(takeProfit);
                newSeries.createPriceLine(currentPrice);

            }


            chart.timeScale().fitContent();

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };

        },
        [initialData, barsData]
    );




    return (
        <>
            <div className={classes.chart}
                ref={chartContainerRef}
            >
                <div className={classes.border}></div>
            </div>
        </>

    );
};

export default Chart;