import React, { useState } from 'react'
import { section, slickListData } from '../data'
import BaseLayout from '../components/common/base-layout'
import Container from '../components/common/container'
import UserInfo from '../components/user-info'
import WatchList from '../components/watch-list/WatchList'
import SlickList from '../components/slick-list/SlickList'
import SearchData from '../components/search-data'

// 쿠키 확인(로그인 유무)
// 응답 받은 데이터 props 전달

function Main() {
  return (
    <BaseLayout type="main">
      <SearchData />
      <Container>
        <UserInfo />
        <WatchList />
        {section.map((name, idx) => (
          <SlickList key={idx} section={name} data={slickListData[name]} />
        ))}
      </Container>
    </BaseLayout>
  )
}

export default Main
