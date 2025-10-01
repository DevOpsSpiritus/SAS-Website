export function generateOpenGraph(title: string, description: string){
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ['/og.png']
    }
  }
}
