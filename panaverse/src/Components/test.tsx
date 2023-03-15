import React from 'react'

export default function test() {

    const arr = ['a','b','b','b','a','a']


    const sort = (arr: []) => {
        const res = arr.sort((a : string,b : string) => {
            return a - b
        })

        return res

    }

    


  return (
    <div>test</div>
  )
}
