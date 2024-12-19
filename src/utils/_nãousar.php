<?php

class SiteService
{
    const DATABASE = 'church-db';
    
    public static function getCalendarios(){
        $conn = TTransaction::open(self::DATABASE);
        
        $calendar = tabela_datas::where('titulo', 'IS NOT', NULL)->load();
        $calendarArray = [];
        
        //var_dump($calendar);
        if($calendar)
        {
            foreach($calendar as $x)
            {
                $calendarArray[] = $x->toArray();
            }
        }
        
        TTransaction::close();
        
        return $calendarArray;
    }
    
    public static function getCardsHomePage(){
        $conn = TTransaction::open(self::DATABASE);
        
        $card_direita = secao2_direita_hp::where('foto', 'IS NOT', NULL)->load();
        $card_esquerda = secao2_esquerda_hp::where('foto', 'IS NOT', NULL)->load();
        $card_meio = secao2_meio_hp::where('foto', 'IS NOT', NULL)->load();
        
        $cardEsqArray = [];
        $cardDirArray = [];
        $cardMeiArray = [];
        
        
        if($card_esquerda)
        {
            foreach($card_esquerda as $x)
            {
                $cardEsqArray[] = $x->toArray();
            }
        }
        
                
        if($card_direita)
        {
            foreach($card_direita as $x)
            {
                $cardDirArray[] = $x->toArray();
            }
        }
        
        if($card_meio)
        {
            foreach($card_meio as $x)
            {
                $cardMeiArray[] = $x->toArray();
            }
        }
        
        TTransaction::close();
        
        return [
                'cards' => [
                    'card_direita' => $cardDirArray,
                    'card_esquerda' => $cardEsqArray,
                    'card_meio' => $cardMeiArray    
                    ]
            ];
    }
    
    public static function getBannerCarouselHomePage(){
        $conn = TTransaction::open(self::DATABASE);
        
        $banner = banner1_hp::where('banner_foto', 'IS NOT', NULL)->load();
        $carousel = carousel1_hp::where('banner_carousel', 'IS NOT', NULL)->load();
        
        
        $bannerArray = [];
        $carouselArray = [];
        
        if($banner)
        {
            foreach($banner as $x)
            {
                $bannerArray[] = $x->toArray();
            }
        }
        
                
        if($carousel)
        {
            foreach($carousel as $x)
            {
                $carouselArray[] = $x->toArray();
            }
        }
        
        TTransaction::close();
        
        return [
            'banner' => $bannerArray,
            'carousel' => $carouselArray,
            ];
    }
    
    public static function getSectionsHomePage(){
        $conn = TTransaction::open(self::DATABASE);
        
        $s1 = secao1_hp::where('foto_s1', 'IS NOT', NULL)->load();
        $s3 = secao3_hp::where('foto_s3', 'IS NOT', NULL)->load();
        
        
        $s1Array = [];
        $s3Array = [];
        
        if($s1)
        {
            foreach($s1 as $x)
            {
                $s1Array[] = $x->toArray();
            }
        }
        
                
        if($s3)
        {
            foreach($s3 as $x)
            {
                $s3Array[] = $x->toArray();
            }
        }
        
        TTransaction::close();
        
        return [
            'section1' => $s1Array,
            'section3' => $s3Array,
            ];
    }
  
    public static function getHomePageItens() {
        
        $hp = new SiteService();
        
        $cards = $hp->getCardsHomePage();
        $bannerCarousel = $hp->getBannerCarouselHomePage();
        $sections = $hp->getSectionsHomePage();
        
        return [
            $cards,
            $bannerCarousel,
            $sections
        ];
        
    }
    
    public static function getSectionsAbout(){
        $conn = TTransaction::open(self::DATABASE);
        
        $s1 = secao1_quem::where('titulo', 'IS NOT', NULL)->load();
        $s2 = secao2_quem::where('titulo', 'IS NOT', NULL)->load();
        $s3 = secao3_quem::where('titulo', 'IS NOT', NULL)->load();
        $s4 = secao4_quem::where('titulo', 'IS NOT', NULL)->load();
        
        $s1Array = [];
        $s2Array = [];
        $s3Array = [];
        $s4Array = [];
        
        
        if($s1)
        {
            foreach($s1 as $x)
            {
                $s1Array[] = $x->toArray();
            }
        }
        
                
        if($s2)
        {
            foreach($s2 as $x)
            {
                $s2Array[] = $x->toArray();
            }
        }
        
        if($s3)
        {
            foreach($s3 as $x)
            {
                $s3Array[] = $x->toArray();
            }
        }
        
        if($s4)
        {
            foreach($s4 as $x)
            {
                $s4Array[] = $x->toArray();
            }
        }
        
        
        TTransaction::close();
        
        return [
            'section1' => $s1Array,
            'section2' => $s2Array,
            'section3' => $s3Array,
            'section4' => $s4Array,
        ];
    }
    
    public static function getAboutPageItens(){
        $ss = new SiteService();
        
        $quem = $ss->getSectionsAbout();
        
        return $quem;
    }
    
    public static function getSectionsProg(){
        $conn = TTransaction::open(self::DATABASE);
        
        $s1 = secao1_prog::where('titulo', 'IS NOT', NULL)->load();
        $s2 = secao2_prog::where('titulo', 'IS NOT', NULL)->load();
        
        $s1Array = [];
        $s2Array = [];
        
        if($s1)
        {
            foreach($s1 as $x)
            {
                $s1Array[] = $x->toArray();
            }
        }
        
                
        if($s2)
        {
            foreach($s2 as $x)
            {
                $s2Array[] = $x->toArray();
            }
        }
        
       
        TTransaction::close();
        
        return [
            'section1' => $s1Array,
            'section2' => $s2Array,
        ];
    }
    
    public static function getProgPageItens(){
        $ss = new SiteService();
        
        $secprog = $ss->getSectionsProg();
        $calen = $ss->getCalendarios();
        
        return [
            $secprog,
            $calen    
        ];
        
    }
    
    public static function getArtigosContent(){
        $conn = TTransaction::open(self::DATABASE);
        
        $artigoDevo = artigo_devocionais::where('foto', 'IS NOT', NULL)->load();
        $artigoBibli = artigo_biblico::where('foto', 'IS NOT', NULL)->load();
        
        $artigoDevoArray = [];
        $artigoBibliArray = [];
        
        if($artigoDevo)
        {
            foreach($artigoDevo as $x)
            {
                $artigoDevoArray[] = $x->toArray();
            }
        }
        
                
        if($artigoBibli)
        {
            foreach($artigoBibli as $x)
            {
                $artigoBibliArray[] = $x->toArray();
            }
        }
        
       
        TTransaction::close();
        
        return [
            'devocional' => $artigoDevoArray,
            'biblico' => $artigoBibliArray,
        ];
    }
    
    public static function getVideosContent(){
        $conn = TTransaction::open(self::DATABASE);
            
        $querySP = " SELECT 
                sp.id AS serie_id, 
                sp.name_serie, 
                sp.link_video_serie, 
                sp.resume_serie as resumo,  
                vs.id AS video_id, 
                vs.nome_video_serie as name_video,   
                vs.link_video_series as link_video,   
                vs.pastor_series as pastor 
            FROM 
                series_principal sp 
            JOIN 
                video_serie vs 
            ON 
                sp.id = vs.id_series";

        $stmt = $conn->prepare($querySP);
        $stmt->execute();

        // Busca todos os resultados
        $resultSeries = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
        $querySS = " 
            SELECT 
                ss.id AS sermon_id, 
                ss.video_link as link_video,
                ss.sermon_name as name_video,
                ss.shepherd_name as pastor,
                ss.summary_sermon as resumo
            FROM 
                ss_watch_sermon ss";

        $stmt1 = $conn->prepare($querySS);
        $stmt1->execute();

        // Busca todos os resultados
        $resultVideo = $stmt1->fetchAll(PDO::FETCH_ASSOC);    
            
            
        
        TTransaction::close();
            
        return [
            'series' => $resultSeries,
            'videos' => $resultVideo,
        ];
        
    }
    
    public static function getContentPageItens(){
        $ss = new SiteService();
        
        $videos = $ss->getVideosContent();
        $artigos = $ss->getArtigosContent();
        
        return [
            $videos,
            $artigos    
        ];
    }
    
    public static function getLocalizacaoItens(){
        //localizacao_igrejas
        
               $conn = TTransaction::open(self::DATABASE);
        
        $local = localizacao_igrejas::where('pastores', 'IS NOT', NULL)->load();
        
        $localArray = [];
    
        
        if($local)
        {
            foreach($local as $x)
            {
                $localArray[] = $x->toArray();
            }
        }
        
        TTransaction::close();
        
        return $localArray;
    
        
        
        
    }
    
}

