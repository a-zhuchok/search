import React, { useEffect } from 'react';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchText } from '../redux/searchTextSlice';
import { useNavigate } from 'react-router-dom';

const SearchResultInput = () => {
    const { searchText } = useSelector(state => state.searchText);
    const navigate = useNavigate();
    useEffect(() => {
        if (searchText === '') {
            navigate('/')
        }
    }, [searchText])
    const { Search } = Input;
    const dispatch = useDispatch();
    const onSearch = (value) => {
        dispatch(addSearchText(value))
    };

    return (
        <div class='searchResultInput'>
            <div class='searchResultInput_content'>
                <p class='searchResultInput_title title'>Поиск видео</p>
                <div class='searchResultInput_input'>
                    <Search
                        placeholder="введите текст поиска"
                        defaultValue={searchText}
                        allowClear
                        enterButton="Найти"
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchResultInput