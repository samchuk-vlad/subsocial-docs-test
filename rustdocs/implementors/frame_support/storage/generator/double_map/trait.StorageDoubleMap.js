(function() {var implementors = {};
implementors["pallet_moderation"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_moderation/trait.Trait.html\" title=\"trait pallet_moderation::Trait\">Trait</a>&gt; StorageDoubleMap&lt;<a class=\"enum\" href=\"pallet_moderation/enum.EntityId.html\" title=\"enum pallet_moderation::EntityId\">EntityId</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/trait.Trait.html\" title=\"trait frame_system::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"frame_system/trait.Trait.html#associatedtype.AccountId\" title=\"type frame_system::Trait::AccountId\">AccountId</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"pallet_moderation/struct.ReportIdsByEntityInSpace.html\" title=\"struct pallet_moderation::ReportIdsByEntityInSpace\">ReportIdsByEntityInSpace</a>&lt;T&gt;","synthetic":false,"types":["pallet_moderation::ReportIdsByEntityInSpace"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_moderation/trait.Trait.html\" title=\"trait pallet_moderation::Trait\">Trait</a>&gt; StorageDoubleMap&lt;<a class=\"enum\" href=\"pallet_moderation/enum.EntityId.html\" title=\"enum pallet_moderation::EntityId\">EntityId</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/trait.Trait.html\" title=\"trait frame_system::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"frame_system/trait.Trait.html#associatedtype.AccountId\" title=\"type frame_system::Trait::AccountId\">AccountId</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"enum\" href=\"pallet_moderation/enum.EntityStatus.html\" title=\"enum pallet_moderation::EntityStatus\">EntityStatus</a>&gt; for <a class=\"struct\" href=\"pallet_moderation/struct.StatusByEntityInSpace.html\" title=\"struct pallet_moderation::StatusByEntityInSpace\">StatusByEntityInSpace</a>&lt;T&gt;","synthetic":false,"types":["pallet_moderation::StatusByEntityInSpace"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_moderation/trait.Trait.html\" title=\"trait pallet_moderation::Trait\">Trait</a>&gt; StorageDoubleMap&lt;<a class=\"enum\" href=\"pallet_moderation/enum.EntityId.html\" title=\"enum pallet_moderation::EntityId\">EntityId</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/trait.Trait.html\" title=\"trait frame_system::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"frame_system/trait.Trait.html#associatedtype.AccountId\" title=\"type frame_system::Trait::AccountId\">AccountId</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"pallet_moderation/struct.SuggestedStatus.html\" title=\"struct pallet_moderation::SuggestedStatus\">SuggestedStatus</a>&lt;T&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"pallet_moderation/struct.SuggestedStatusesByEntityInSpace.html\" title=\"struct pallet_moderation::SuggestedStatusesByEntityInSpace\">SuggestedStatusesByEntityInSpace</a>&lt;T&gt;","synthetic":false,"types":["pallet_moderation::SuggestedStatusesByEntityInSpace"]}];
implementors["pallet_roles"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_roles/trait.Trait.html\" title=\"trait pallet_roles::Trait\">Trait</a>&gt; StorageDoubleMap&lt;<a class=\"enum\" href=\"pallet_utils/enum.User.html\" title=\"enum pallet_utils::User\">User</a>&lt;&lt;T as <a class=\"trait\" href=\"frame_system/trait.Trait.html\" title=\"trait frame_system::Trait\">Trait</a>&gt;::<a class=\"type\" href=\"frame_system/trait.Trait.html#associatedtype.AccountId\" title=\"type frame_system::Trait::AccountId\">AccountId</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"pallet_roles/struct.RoleIdsByUserInSpace.html\" title=\"struct pallet_roles::RoleIdsByUserInSpace\">RoleIdsByUserInSpace</a>&lt;T&gt;","synthetic":false,"types":["pallet_roles::RoleIdsByUserInSpace"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()