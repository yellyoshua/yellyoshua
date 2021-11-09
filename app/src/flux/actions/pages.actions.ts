import { PagesController } from "@/app/api/pages/controllers";

const pagesController = new PagesController()

export const getPagesWithSlug = () => {
  return pagesController.getPagesSlug()
}

export const getPageBySlug = (slug: string) => {
  return pagesController.getPageBySlug(slug)
}