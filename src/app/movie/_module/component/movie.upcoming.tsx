import { useUpcomingListQuery } from '@/queries/query.movie'
import { Genre, Movie } from '@/interfaces/interface.movie'
import { Card, Col, Collapse, Image, Row } from 'antd'
import style from '@/app/movie/_module/css/now.playing.module.css'

export default function MovieUpcoming({ genreList }: { genreList: Genre[] }) {
  const { data } = useUpcomingListQuery()

  function getGenreList(genres: number[]) {
    return genres.map((id) => {
      const genre = genreList.find((g: any) => g.id === id)
      return genre ? genre.name : null
    })
  }

  console.log(data)
  return (
    <Row gutter={16}>
      {data &&
        data.results.map((item: Movie) => (
          <Col span={8} key={item.id} className={style.colContainer}>
            <Card
              title={
                <div>
                  {item.title}
                  <div>{item.release_date}</div>
                </div>
              }
              className={style.cardContainer}
            >
              <Image src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
              <Collapse>
                <Collapse.Panel key={item.id} header={getGenreList(item.genre_ids).join(',')}>
                  {item.overview}
                </Collapse.Panel>
              </Collapse>
            </Card>
          </Col>
        ))}
    </Row>
  )
}