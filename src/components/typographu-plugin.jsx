import React from 'react'

const TypographuPlugin = () => {
  return (
    <>
        <div className='prose'>
            <h1>This is heading</h1>
            <p>this is nice short paragarph</p>

            <ul>
                <li>unorderded item 1</li>
                <li>unorderded item 2</li>
                <li>unorderded item 3</li>
            </ul>
            <ol>
                <li>orderded item 1</li>
                <li>orderded item 2</li>
                <li>orderded item 3</li>
            </ol>
        </div>
        <article className="prose lg:prose-xl">
            <h1>Garlic bread with cheese: What the science tells us</h1>
            <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
            </p>
            <p>
            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
            springing up around the country.
            </p>
    </article>
  </>
  )
}

export default TypographuPlugin