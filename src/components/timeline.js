import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-phtos';
import Post from './post';

export default function Timeline(){

//we need to get the logged in user's phots

const {photos} = usePhotos();
//on loading the photos, we need to use react skeleton
//if we have photos, render theme (create a post component)
//if the user no photos, tell them to creat som photos

return (<div className="container col-span-2">
        {!photos ? (
            <>
            {[...new Array(4)].map((_, index) => (
                <Skeleton key={index} count={1} width={640} height={600} className="mb-5"/>
            ))}
        </>
      ) : photos?.length > 0 ? (
          photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
          <p className="text-center text-2xl">Follow pepole to see there photos</p>
      )}
      </div>);
}