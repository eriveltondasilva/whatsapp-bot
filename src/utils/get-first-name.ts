export function getFirstName(name: string): string {
  const [firstName] = name.split(' ')
  return firstName
}
