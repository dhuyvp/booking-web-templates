export default defineEventHandler(async (event) => {
  const uri = 'https://apiv3.bookie.vn';
  const config = useRuntimeConfig(event)
  const { domain } = getQuery(event);

  if (!domain) {
    return { error: 'Missing domain parameter' };
  }

  const companyInfo = await $fetch(`${uri}/${domain}/bookie/company`)
  return companyInfo

});