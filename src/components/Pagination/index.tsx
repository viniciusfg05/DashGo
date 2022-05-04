import { Box, Text, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface Pagination {
  totalCount0fRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1

// generatePagesArray(2, 5)

// [2 + 0 +1, 2 + 1 + 1, 2 + 2 + 1]
// [3, 4, 5] page entre dois e cinco
function generatePagesArray(from: number, to: number) {
  return [ ...new Array(to - from)].map((_, index) => {
    return from + index + 1;
  })
  .filter(page => page > 0)
}

export function Pagination({
    totalCount0fRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange
  }: Pagination) {
    const lastPage = Math.floor(totalCount0fRegisters / registersPerPage);

    const previousPages = currentPage > 1 //se ñ for a primeira page
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage -1)
      : []

    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack direction={["column","row"]} mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        { currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem  number={1}/>
            { currentPage > (2 + siblingsCount) && <Text>...</Text>}
          </>
        )}

        { previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem  key={page} number={page}/>
        })}

        <PaginationItem number={currentPage} isCurrent/>


        { nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem  key={page} number={page}/>
        })}


        {(currentPage + siblingsCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) && <Text>...</Text>}
            <PaginationItem  number={lastPage}/>
          </>
        )}
      </Stack>

    </Stack>
  );
}