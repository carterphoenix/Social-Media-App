import { Models } from "appwrite"
import GridPostList from "./GridPostList"
import Loader from "./Loader"

type searchResultsProps = {
  isSearchFetching: boolean,
  searchedPosts: Models.Document[]
}
const SearchResults = ({ isSearchFetching, searchedPosts }: searchResultsProps) => {
  if(isSearchFetching) return <Loader />
  // @ts-ignore
  if(searchedPosts && searchedPosts.documents.length > 0) {
    return (
      // @ts-ignore
      <GridPostList posts={searchedPosts.documents} />
    )
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  )
}

export default SearchResults