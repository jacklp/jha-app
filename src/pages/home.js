import Prints from '../components/prints'
import React, { useState, useEffect, useReducer, dispatch } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { withRouter, useLocation } from 'react-router-dom';

function Home() {

  let location = useLocation();
  // Declare a new state variable, which we'll call "count"
  const [prints, dispatch] = useReducer(reducer, {
    data: {
      records: [],
      info: {
        backPage: 0,
        page: 1,
        nextPage: 2
      }
    }
  });

  function reducer(state, action) {
    const pageInfo = {
      backPage: action.data.info.page - 1,
      nextPage: action.data.info.page + 1
    };

    return {
      ...action,
      data: {
      ...action.data,
        info: {
        ...pageInfo,
          ...action.data.info
        }
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {

      const result = await axios.get(`http://localhost:4000?page=${location.pathname.split('/')[1]}`,
          {
            headers: {'Access-Control-Allow-Origin': '*'}
          });
      console.log(result);
      dispatch(result);
    };
    fetchData();
  }, [dispatch,  location]);

  const style= {
    marginRight: '20px'
  }

  return (
      <div>
        { prints.data.records.length > 0 &&
            <div>
              { prints.data.info.backPage > 0 && <Link style={style} to={location => `/${prints.data.info.backPage}`}>Back a Page</Link> }
              <Link to={location => `/${prints.data.info.nextPage}`}>Forward a Page</Link>
              <Prints prints={prints}  />
            </div>
        }
      </div>
  )
}

export default withRouter(Home);
