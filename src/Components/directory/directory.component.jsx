import { DirectoryContainer, Limited } from '../directory/directory.styles';
import DirectoryItem from'../directory-item/directory-item'
import Timer from './timer';

const categories = [
    {
      "id": 1,
      "title": "soft toys",
      "imageUrl": "https://images.unsplash.com/photo-1515611309071-6cd7e12cace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGUlMjB0ZWRkeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      route:'shop/soft-toys',
    },
    {
      "id": 2,
      "title": "learning toys",
      "imageUrl": "https://images.unsplash.com/photo-1611517976630-163467322778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHV6emxlfGVufDB8fDB8fHww&w=1000&q=80",
      route:'shop/learning-toys',
    },
    {
      "id": 3,
      "title": "musical toys",
      "imageUrl": "https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG95fGVufDB8fDB8fHww&w=1000&q=80",
      route:'shop/musical-toys',
    },
    {
      "id": 4,
      "title": "girls",
      "imageUrl": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpdHRsZSUyMGdpcmwlMjBpbiUyMHdoaXRlfGVufDB8fDB8fHww&w=1000&q=80",
      route:'shop/girls',
    },
    {
      "id": 5,
      "title": "boys",
      "imageUrl": "https://img.freepik.com/free-photo/medium-shot-boy-with-color-splash_23-2150753104.jpg",
      route:'shop/boys',
    }
  ]
  const Directory = () => {
    return (
      <>
      <Limited>
        <p>LIMITED TIME DEALS</p>
        <p className='hurry'>⏰ Hurry,Before It's Gone</p>
        <Timer/>
      </Limited>
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
      </>
    );
  };

    export default Directory;