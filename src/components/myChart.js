import React from 'react'
import {Bar} from 'react-chartjs-2'

export default function MyChart({data:{confirmed, recovered, deaths}}){

    return (
        <div className='mychart'>
           <Bar
           data={{
               labels: ['Infected', 'Recovered', 'Deaths'],
               datasets: [{
                   label: 'prople',
                   backgroundColor: [
                       'rgb(255, 0, 0, 0.5)',
                       'rgb(0, 255, 0, 0.5)',
                       'rgb(105,105,105,0.5)'
                   ],
                   data: [confirmed, recovered, deaths ]
               }]
           }}
           options={{
               legend: {display: false},
           }}
           height={88}
           /> 
        </div>
    )
}