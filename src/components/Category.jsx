import React from 'react';
import styled from 'styled-components';

const styles = {
  categoryWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30, 
  },
  categoryBox: {
    width: 240,
    height: 160,
    color: '#fff',
    padding: 20,
    boxSizing: 'border-box',
    backgroundColor: '#031956',
    borderRadius: 20,
  },
  categorBoxCount: {
    fontSize: '1.6rem',
  },
  categorBoxTitle: {
    fontSize: '3.2rem',
    paddingTop: 10,
    paddingBottom: 20,
  },
  progressBar: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: 8,
    overflow: 'hidden',
    borderRadius: 4,
    // backgroundColor: '#fff',
  },
  progressBarFinish: {
    // width: ({category.finish}/{category.total})*100,  
    // TODO : (완료한 개수/총 개수) 비율대로 width값 나오도록 수정
    width: '70%',
    height: '100%',
    backgroundColor: '#EB05FF',
  },
  progressBarNotyet: {
    // width: {},  // TODO : (남은 개수/총 개수) 비율대로 width값 나오도록 수정
    width: '30%',
    height: '100%',
    backgroundColor: '#fff',
    opacity: 0.2,
  },
}

function Category(props) {
  const { categorys } = props;
  console.log(categorys);
  return (
    <>
      <div style={styles.categoryWrapper}>
        {categorys.map((category, index) => {
          return(<div style={styles.categoryBox} key={category.id}>
            <span style={styles.categorBoxCount}>{`${category.finish}/${category.total}개`}</span>
            <p style={styles.categorBoxTitle}>{category.title}</p>
            <div style={styles.progressBar}>
              {/* <div style={styles.progressBarFinish}></div> */}
              {/* <div style={styles.progressBarNotyet}></div> */}
              <div 
              // TODO: (질문) 혹시 직접 적용한 css와  위 styles에 담은 css를 동시에 적용시킬 수는 없나요? 
                style={{ width: (category.finish/category.total)*200,
                height: '100%',
                backgroundColor: '#EB05FF',
                }}
              >
              </div>
              <div
                style={{ width: (category.notyet/category.total)*200,
                height: '100%',
                backgroundColor: '#fff',
                opacity: 0.2,
                }}
              >
              </div>
            </div>
          </div>
          )})}
        

        {/* <div style={styles.categoryBox}></div>
        <div style={styles.categoryBox}></div> */}
      </div>
    </>
  );
}

export default Category;