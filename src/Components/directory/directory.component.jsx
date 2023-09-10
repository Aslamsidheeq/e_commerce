import { DirectoryContainer, Limited } from '../directory/directory.styles';
import DirectoryItem from'../directory-item/directory-item'
import Timer from './timer';

const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://img.freepik.com/premium-photo/white-bucket-hat-mockup-canvas-booney-panama-summer-head-wear-mock-up-oversized-sunhat_87790-2269.jpg?w=900",
      route:'shop/hats',
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://img.freepik.com/free-psd/white-jacket-floating-white_176382-1845.jpg?w=740&t=st=1693989927~exp=1693990527~hmac=4e2e1dfd1ee3c1845d937f5f20b622b1b1d0ead5af23fc473c883783641d9fc4",
      route:'shop/jackets',
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135205.jpg?w=900&t=st=1693989980~exp=1693990580~hmac=e2c09d40b15bfae72616da6c44d89c102dc220b3b80f292fb618eb0f488ec283",
      route:'shop/sneakers',
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://img.freepik.com/free-photo/portrait-elegant-modern-european-woman-with-bun-hairstyle-smiling-broadly_176420-17184.jpg?w=900&t=st=1693990533~exp=1693991133~hmac=ecf38a70fdde17cf7fedcd7914e9126c7a189c430cbdbcda4d38bb749baf7d5a",
      route:'shop/womens',
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://img.freepik.com/premium-photo/portrait-smiling-young-man_171337-38369.jpg?w=900",
      route:'shop/mens',
    }
  ]
  const Directory = () => {
    return (
      <>
      <Limited>
        <p>LIMITED TIME DEALS</p>
        <p>⏰ Hurry,Before It's Gone</p>
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