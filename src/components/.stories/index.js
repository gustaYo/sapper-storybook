const load = requireContext => requireContext.keys().map(requireContext);
load(require.context('../', true, /.stories.js$/));