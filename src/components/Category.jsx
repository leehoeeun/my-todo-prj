import React from 'react';
import styled from 'styled-components';


const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px; 
`;


const CategoryBox = styled.div`
  width: 240px;
  height: 160px;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  background-color: #031956;
  border-radius: 20px;
  .category-count {
    font-size: 1.6rem;
  }
  .category-title {
    font-Size: 3.2rem;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  .progress-bar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 8px;
    overflow: hidden;
    border-radius: 4px;
  }
  .progress-bar--finish {
    width: ${props => Number(props.finish/props.total*100)}%;
    height: 100%;
    background-color: #EB05FF;
  }
  .progress-bar--notyet {
    width: ${props => Number(props.notyet/props.total*100)}%;
    height: 100%;
    background-color: #fff;
    opacity: 0.2;
  }
`; 

function Category(props) {
  const { categorys } = props;
  
  return (
    <>
      <CategoryWrapper>
        {categorys.map((category, index) => {
          console.log(category.finish/category.total)
          return(<CategoryBox key={category.id} total={category.total} finish={category.finish} notyet={category.notyet}>
            <span className='category-count'>{`${category.finish}/${category.total}개`}</span>
            <p className='category-title'>{category.title}</p>
            <div className='progress-bar'>
              <div className='progress-bar--finish'></div>
              <div className='progress-bar--notyet'></div>
            </div>
          </CategoryBox>
          )})}
      </CategoryWrapper>
    </>
  );
}

export default Category;