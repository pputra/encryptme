import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Store from '../store/index';



describe('Data Reducer', () => {

    it('expects data to be an array', () => {
        let data = Store.getState().dataReducer.data;
        expect(data).toMatchObject([]);
    })

    it('expects data to be empty initially', () => {
        let data = Store.getState().dataReducer.data;

        expect(data).toHaveLength(0);
    });

    it ('expects data to be an array with length of 1 if fetched successfully', () => {
        

        Store.dispatch({
            type: 'FETCH_DATA_SUCCESS',
            payload: ['test']
        });
        
        let data = Store.getState().dataReducer.data;

        expect(data).toHaveLength(1);
    });
    
    it('expects error to be true if data fetching failed', () => {
        
        Store.dispatch({
            type: 'FETCH_DATA_ERROR'
        });

        let error = Store.getState().dataReducer.error;

        expect(error).toBeTruthy();
    });

    it('expects loading to be true if FETCH_DATA_LOADING is dispatched ', () => {
        
        Store.dispatch({
            type: 'FETCH_DATA_LOADING'
        });

        let loading = Store.getState().dataReducer.loading;

        expect(loading).toBeTruthy();
    });

  
  

});
