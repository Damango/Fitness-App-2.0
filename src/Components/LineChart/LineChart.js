import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const LineChart = (props) => {


    /*let data = [
        {
            "id": "Busters",

            "color": 'hsl(195, 70%, 50%)',
            "data":[
                {x: 0,
                    y: 10
            }
            ]

        },
        {
            "id": "Jimbob",

            "color": 'hsl(198, 70%, 50%)',
            "data":[
                {x: 1,
                    y: 100
            }
            ]

        }
    ]*/

    let data = [
        {
          "id": "japan",
          "color": "hsl(195, 70%, 50%)",
          "data": [
            {
              "x": 0,
              "y": 134
            },
            {
              "x": 1,
              "y": 185
            },
            {
              "x": 2,
              "y": 100
            },
            {
              "x": 3,
              "y": 20
            },
            {
              "x": 4,
              "y": 223
            },
            {
              "x": 5,
              "y": 220
            },
            {
              "x": 6,
              "y": 253
            },
            {
              "x": 7,
              "y": 144
            },
            {
              "x": 8,
              "y": 228
            },
            {
              "x": 9,
              "y": 52
            },
            {
              "x": 10,
              "y": 271
            },
            {
              "x": 11,
              "y": 132
            },
            {
              "x": 12,
              "y": 281
            },
            {
              "x": 13,
              "y": 254
            }
          ]
        }
      ]




    return ( <ResponsiveLine
        data={data}
        enableGridX={true}
        enableGridY={true}
        margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        xScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={{
            
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legend: '',
            legendOffset: 0
        }}
        axisBottom={{
           
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2f',
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
           
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        pointSize={6}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
       
        legends={[]}
    /> );
}
 
export default LineChart;