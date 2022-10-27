import React from 'react'
import Layout from '../components/Layout'
import Pizza from '../components/Pizza'
import pizzas from '../pizzasdata'

const IndexPage = () => {
  return (
    <Layout>
        <div className='row'>
            {pizzas.map((pizza, index) => {
              return <div className='col-md-4' key={index}> 
                <div>
                    <Pizza pizza={pizza}/>
                </div>
              </div>
            })
            }
        </div>
    </Layout>
  )
}

export default IndexPage