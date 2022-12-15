import { ResponsiveLine } from "@nivo/line"
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
// import { mockDataLine as data } from "../data/mockData"

const LineChart = ({ isDashboard = false,data }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

// const LineChart = ({ isDashboard = false }) => {
   
//     const theme = useTheme()
    return (
        <ResponsiveLine
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: theme.palette.secondary[200]
                        }
                    },
                    legend: {
                        text: {
                            fill: theme.palette.secondary[200]
                        }
                    },
                    ticks: {
                        line: {
                            stroke: theme.palette.secondary[200],
                            strokeWidth: 1
                        },
                        text: {
                            fill: theme.palette.secondary[200]
                        }
                    }

                },
                legends: {
                    text: {
                        fill: theme.palette.secondary[200]
                    }
                },
                tooltip: {
                    container: {
                        color: theme.palette.secondary[200]
                    }
                }
            }}


            colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 0,
                max: 1000,
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
               
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard? undefined:'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickValues:5,
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend:isDashboard? undefined: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default LineChart;