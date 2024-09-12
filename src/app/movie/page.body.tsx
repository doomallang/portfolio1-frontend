'use client'

import { useState } from 'react'
import { Menu, MenuProps } from 'antd'
import { BellOutlined, FireOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { MovieListType } from '@/enums/movie'
import MovieNowPlaying from '@/app/movie/_module/component/movie.now.playing'

import style from './_module/css/body.module.css'
import { useGenreListQuery } from '@/queries/query.movie'
import MoviePopular from '@/app/movie/_module/component/movie.popular'
import MovieUpcoming from '@/app/movie/_module/component/movie.upcoming'

type MenuItem = Required<MenuProps>['items'][number]

export default function MovieBody() {
  const { data } = useGenreListQuery()
  const [current, setCurrent] = useState('now')

  const items: MenuItem[] = [
    {
      label: 'Now Playing',
      key: 'now',
      icon: <PlayCircleOutlined />,
    },
    {
      label: 'Popular',
      key: 'popular',
      icon: <FireOutlined />,
    },
    {
      label: 'Upcoming',
      key: 'upcoming',
      icon: <BellOutlined />,
    },
  ]
  const onClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }

  return (
    <>
      <Menu mode="horizontal" selectedKeys={[current]} onClick={onClickMenu} items={items} />
      {data && (
        <div className={style.contentsContainer}>
          {current === MovieListType.NOW_PLAYING ? (
            <MovieNowPlaying genreList={data.genres} />
          ) : current === MovieListType.POPULAR ? (
            <MoviePopular genreList={data.genres} />
          ) : current === MovieListType.UPCOMING ? (
            <MovieUpcoming genreList={data.genres} />
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  )
}
