(function() {var implementors = {};
implementors["sc_client_api"] = [];
implementors["sc_client_db"] = [{"text":"impl&lt;Block:&nbsp;<a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_client_db/struct.Backend.html\" title=\"struct sc_client_db::Backend\">Backend</a>&lt;Block&gt;","synthetic":false,"types":["sc_client_db::Backend"]}];
implementors["sc_light"] = [{"text":"impl&lt;S, Block&gt; <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_light/backend/struct.Backend.html\" title=\"struct sc_light::backend::Backend\">Backend</a>&lt;S, <a class=\"type\" href=\"sp_runtime/traits/type.HashFor.html\" title=\"type sp_runtime::traits::HashFor\">HashFor</a>&lt;Block&gt;&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"sc_light/fetcher/trait.BlockchainStorage.html\" title=\"trait sc_light::fetcher::BlockchainStorage\">BlockchainStorage</a>&lt;Block&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Block::<a class=\"type\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Hash\" title=\"type sp_runtime::traits::Block::Hash\">Hash</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>,&nbsp;</span>","synthetic":false,"types":["sc_light::backend::Backend"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()