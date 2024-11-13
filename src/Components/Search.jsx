import React from 'react';
import { Input } from 'antd';
import logo from '../img/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchText } from '../redux/SearchTextSlice';
import { fetchGetVideos } from '../redux/VideosSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const { Search } = Input;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSearch = (value) => {
        dispatch(addSearchText(value))
        dispatch(fetchGetVideos(value))
        navigate('/searchResult')
    };

    return (
        <div class='search'>
            <img class='search_logo' src={logo} width={50} height={50} alt='logo' />
            <p class='search_title title'>Поиск видео</p>
            <div class='search_input'>
                <Search
                    placeholder="введите текст поиска"
                    allowClear
                    enterButton="Найти"
                    size="large"
                    onSearch={onSearch}
                />
            </div>
        </div>
    )
}

export default Search