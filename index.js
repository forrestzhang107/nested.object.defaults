function applySchema(object, schema) {
  if (typeof schema != 'object') return
  for (const key in schema) {
    const subSchema = schema[key]
    if (key in object) applySchema(object[key], subSchema)
    else object[key] = subSchema
  }
}

module.exports = applySchema
