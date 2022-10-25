import CastCard from "../Card/CastCard";
import GradientBox from "../GradientBox";
import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../Container";
import BoxTitle from "../BoxTitle";
import BoxTitleLink from "../BoxTitleLink";
import MovieCard from "../Card/MovieCard";
import RecommendationCard from "../Card/RecommendationCard";

export const Teste = () => {
  return (
    <>
      <Container>
        <BoxTitle title={"Casting"} />
        <GradientBox>
          <CastCard
            img={
              "https://image.tmdb.org/t/p/w500/borthNRiTGa7oKZjLKHuUGUrZdq.jpg"
            }
            orlName={"Isabelle Fuhrman"}
            charName={"Leena Klammer / Esther Albright"}
          />
          <CastCard
            img={
              "https://image.tmdb.org/t/p/w500/borthNRiTGa7oKZjLKHuUGUrZdq.jpg"
            }
            orlName={"Isabelle Fuhrman"}
            charName={"Leena Klammer / Esther Albright"}
          />
          <CastCard
            img={
              "https://image.tmdb.org/t/p/w500/borthNRiTGa7oKZjLKHuUGUrZdq.jpg"
            }
            orlName={"Isabelle Fuhrman"}
            charName={"Leena Klammer / Esther Albright"}
          />
          <CastCard
            img={
              "https://image.tmdb.org/t/p/w500/borthNRiTGa7oKZjLKHuUGUrZdq.jpg"
            }
            orlName={"Isabelle Fuhrman"}
            charName={"Leena Klammer / Esther Albright"}
          />
          <CastCard
            img={
              "https://image.tmdb.org/t/p/w500/borthNRiTGa7oKZjLKHuUGUrZdq.jpg"
            }
            orlName={"Isabelle Fuhrman"}
            charName={"Leena Klammer / Esther Albright"}
          />
          <CastCard
            img={"/borthNRiTGa7oKZjLKHuUGUrZdq.jpg"}
            orlName={"Isabelle Fuhrman"}
            charName={"Leena Klammer / Esther Albright"}
          />
          <CastCard
            img={"/borthNRiTGa7oKZjLKHuUGUrZdq.jpg"}
            orlName={"Isabelle Fuhrman"}
            charName={"Leena Klammer / Esther Albright"}
          />
          <CastCard
            img={"/borthNRiTGa7oKZjLKHuUGUrZdq.jpg"}
            orlName={"Isabelle Fuhrman"}
            charName={"Leena Klammer / Esther Albright"}
          />
          <CastCard
            img={"/borthNRiTGa7oKZjLKHuUGUrZdq.jpg"}
            orlName={"Isabelle Fuhrman"}
            charName={"Leena Klammer / Esther Albright"}
          />
        </GradientBox>
      </Container>

      <Container>
        <BoxTitle title={"Recommendations"} />
        <GradientBox>
          <RecommendationCard
            name={"Memento"}
            vote={8.7}
            img={"/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg"}
          />
          <RecommendationCard
            name={"Memento"}
            vote={8.7}
            img={"/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg"}
          />
          <RecommendationCard
            name={"Memento"}
            vote={8.7}
            img={"/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg"}
          />
          <RecommendationCard
            name={"Memento"}
            vote={8.7}
            img={"/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg"}
          />
          <RecommendationCard
            name={"Memento"}
            vote={8.7}
            img={"/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg"}
          />
          <RecommendationCard
            name={"Memento"}
            vote={8.7}
            img={"/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg"}
          />
          <RecommendationCard
            name={"Memento"}
            vote={8.7}
            img={"/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg"}
          />
          <RecommendationCard
            name={"Memento"}
            vote={8.7}
            img={"/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg"}
          />
        </GradientBox>
      </Container>

      <Container>
        <BoxTitleLink title={"Popular"} link={"popular"} />
        <GradientBox>
          <MovieCard
            title={"Orphan: First Kill"}
            value={7}
            img={"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg"}
            id={760161}
          />
          <MovieCard
            title={"Orphan: First Kill"}
            value={7}
            img={"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg"}
            id={760161}
          />
          <MovieCard
            title={"Orphan: First Kill"}
            value={7}
            img={"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg"}
            id={760161}
          />
          <MovieCard
            title={"Orphan: First Kill"}
            value={7}
            img={"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg"}
            id={760161}
          />
          <MovieCard
            title={"Orphan: First Kill"}
            value={7}
            img={"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg"}
            id={760161}
          />
          <MovieCard
            title={"Orphan: First Kill"}
            value={7}
            img={"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg"}
            id={760161}
          />
          <MovieCard
            title={"Orphan: First Kill"}
            value={7}
            img={"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg"}
            id={760161}
          />
          <MovieCard
            title={"Orphan: First Kill"}
            value={7}
            img={"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg"}
            id={760161}
          />
          <MovieCard
            title={"Orphan: First Kill"}
            value={7}
            img={"/wSqAXL1EHVJ3MOnJzMhUngc8gFs.jpg"}
            id={760161}
          />
        </GradientBox>
      </Container>
    </>
  );
};
